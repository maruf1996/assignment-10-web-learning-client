import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <h2>Welcome to Blogs</h2>
            <div className='blog_detail'>
            <h4>What is CORS?</h4>
            <p className="">
                Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
            </p>
            </div>
            <div className='blog_detail'>
            <h4>Why are you using firebase?</h4>
            <p className="">
            Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.
            </p>
            </div>
            <div className='blog_detail'>
            <h4>How does the private route work?</h4>
            <p className="">
            Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login. The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.
            </p>
            </div>
            <div className='blog_detail'>
            <h4>What is Node js? How does Node working?</h4>
            <p className="">
            Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.
            </p>
            </div>
        </div>
    );
};

export default Blog;