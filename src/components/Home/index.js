import React from "react";
import { NavBar } from "../NavBar";
import { FeatureBlog } from "./components/FeaturedBlog";
import { About } from "./components/About";
export const Home = (props) => {
    return (
        <>
            <NavBar />
            <FeatureBlog blog={props.blogs[0]} />
            <About/>
        </>
    )
}