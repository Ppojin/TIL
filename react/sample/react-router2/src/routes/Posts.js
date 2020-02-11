import React from 'react';
import { Route, Link } from 'react-router-dom';


const Post = ({ match }) => {
    return(
        <h1>{match.params.title}</h1>
    )
}

const Posts = () => {
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                <li><Link to="/posts/java">Java Programming</Link></li>
                <li><Link to="/posts/react">React Programming</Link></li>
                <li><Link to="/posts/js">JavaScript Programming</Link></li>
                <li><Link to="/posts/msa">Microservice Architecture</Link></li>
                <Route path="/posts/:title" component={Post} />
            </ul>
        </div>
    );
};

export default Posts;