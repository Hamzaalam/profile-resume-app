import React from 'react';

const Blog = () => {
    const  content ={
        margin: '0 auto',
        maxWidth:'700px',
        padding:'20px 20px',
    }
    const section = {
        marginTop:'40px'
    }
    return ( <div style={content}>
                <section style={section}>
                    <h2>Blog Coming Soon!</h2>
                </section>
            </div> 
            );
}
 
export default Blog;