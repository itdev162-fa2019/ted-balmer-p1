import React from 'react';
import './Post/styles.css';

const About = props => {
    const { About } = props;

    return (
        <article className="postItem">
            <h2>About Page</h2>
            <p>This is the about page, which seems to have nothing on it.</p>
        </article>
    );
}

export default About;