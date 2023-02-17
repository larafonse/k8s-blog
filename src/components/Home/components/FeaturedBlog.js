import React from "react";
import { BlogPreview } from "./BlogPreview";
export const FeatureBlog = (props) => {


    return (
        <div className="container">
            <div className="card">
                <h1 className="card-title">Feature Blog Post</h1>
                <div className='blog-card'>
                    <BlogPreview blog ={props.blog}/>
                </div>
            </div>
        </div>
    )
}