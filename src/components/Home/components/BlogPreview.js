import React from "react";

export const BlogPreview = (props) => {


    return (
        <div>

            <div className='blog-title'>
                <span>{props.blog.title} - </span>
                <i className='blog-date'>
                    {props.blog.date}
                </i>
            </div>
            <p className='blog-body'>
                {props.blog.paragraphs[0]}
            </p>
            <br />
            <p className='blog-body'>
                {props.blog.paragraphs[1].substring(0, 150)} . . .
            </p>
            <br />
            <div id="view-more-link">
                <a href="/portfolio/blog/0">continue reading</a>
            </div>
            
        </div>)
}