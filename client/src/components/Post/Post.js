import React from 'react';

const Post = props => {
    const { post } = props;

    return (
        <article className="postItem">
            <h2>{post.title} <span>by {post.author}</span></h2>
            <p>{post.body}</p>
            <h4>Created on: {post.date}</h4>
        </article>
    );
}

export default Post;