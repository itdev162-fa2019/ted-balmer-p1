import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import './styles.css';

const EditPost = ({ post, onPostUpdated }) => {
    let history = useHistory();
    const [postData, setPostData] = useState({
        title: post.title,
        author: post.author,
        body: post.body
    });
    
    const {title, author, body} = postData;

    const onChange = e => {
        const { name, value } = e.target;

        setPostData({
            ...postData,
            [name]: value 
        });
    };

    const update = async () => {
        if (!title || !body) {
            console.log('Title, author, and content are required.');
            alert('Title, author, and content are required.');
        } else {
            const newPost = {
                id: post.id,
                title: title,
                body: body,
                author: author,
                date: moment().toISOString()
            };

            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                const body = JSON.stringify(newPost);
                const res = await axios.put(
                    'http://localhost:5000/api/posts',
                    body,
                    config
                );

                onPostUpdated(res.data);
                history.push('/');
            } catch (error) {
                console.error(`Error creating post: ${error.response.data}`);
            }
        }
    };

    return (
        <div className="form-container">
            <h2>Edit Post</h2>
            <input name="title" type="text" placeholder="Post title" value={title} onChange={e => onChange(e)} />
            <input name="author" type="text" placeholder="Post author" value={author} onChange={e => onChange(e)} />
            <textarea name="body" value={body} placeholder="Post content" onChange={e => onChange(e)}></textarea>
            <button onClick={() => update()}>Save Changes</button> <a href="/" className="btnCancel">Cancel</a>
        </div>
    );
};

export default EditPost;