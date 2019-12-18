import React from 'react';
import { useHistory } from 'react-router-dom';
import slugify from 'slugify';
import './styles.css';

const PostListItem = props => {
    const { post, clickPost, deletePost, editPost } = props;
    const history = useHistory();

    const handleClickPost = post => {
        const slug = slugify(post.title, { lower: true });

        clickPost(post);
        history.push(`/posts/${slug}`);
    };

    const handleEditPost = post => {
        editPost(post);
        history.push(`/edit-post/${post.id}`);
    };

    return (
        <article className="App-list-item">
            <div className="postListItem" onClick={() => handleClickPost(post)}>
                <h2>{post.title} <span>by {post.author}</span></h2>
                <p>{post.body}</p>
                <h4>Created on: {post.date}</h4>
            </div>
            <div className="postControls">
                <button onClick={() => handleEditPost(post)}>Edit Post</button>
                <button onClick={() => deletePost(post)}>Delete Post</button>
            </div>
        </article>
    );
};

export default PostListItem;