#!/usr/bin/env make

.PHONY: run_website install_kind install_kubectl create_kind_cluster \
	create_docker_registry connect_registry_to_kind_network \
	connect_registry_to_kind create_kind_cluster_with_registry build_website \
	apply_ingress_controller install_app build_from_scratch

run_website:
	docker build -t nl-blog . && \
		docker run -p 5001:80 -d --name nl-blog --rm nl-blog

install_kubectl:
	brew install kubectl || true;

install_kind:
	curl -o ./kind https://github.com/kubernetes-sigs/kind/releases/download/v0.11.1/kind-darwin-arm64

connect_registry_to_kind_network:
	docker network connect kind local-registry || true;

connect_registry_to_kind: connect_registry_to_kind_network
	kubectl apply -f ./kind_configmap.yaml;

create_docker_registry:
	if ! docker ps | grep -q 'local-registry'; \
	then docker run -d -p 5000:5000 --name local-registry --restart=always registry:2; \
	else echo "---> local-registry is already running. There's nothing to do here."; \
	fi

create_kind_cluster: install_kind install_kubectl create_docker_registry
	kind create cluster --image=kindest/node:v1.21.12 --name nl-blog --config ./kind_config.yaml || true
	kubectl get nodes

create_kind_cluster_with_registry:
	$(MAKE) create_kind_cluster && $(MAKE) connect_registry_to_kind

apply_ingress_controller:
	kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml

build_website: create_kind_cluster_with_registry apply_ingress_controller
	docker build -t nl-blog . && \
		docker tag nl-blog localhost:5000/nl-blog && \
		docker push localhost:5000/nl-blog

install_app: 
	helm upgrade --atomic --install nl-blog-website ./chart

build_from_scratch: build_website install_app
	echo "all done"