import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {

    const [post, setPost] = useState([]);
    const idParam = useParams().id;
 
    const getPostDetails = async () => {
        try{
            let res = await fetch('https://jsonplaceholder.typicode.com/posts');
            let allPosts = await res.json();
            let postA = allPosts[idParam - 1];
            setPost(postA);
        }
        catch{
            console.log('Something went wrong');
        }
    }

    useEffect(() => {
        getPostDetails();
    }, []);

    return(
        <div className="card col border rounded shadow">
            <h3 className="card-title m-3">Title: {post.title}</h3>
            <h5 className="card-subtitle m-2">User ID: {post.userId}</h5>
            <p className="card-text m-2">{post.body}</p>
        </div>
    )
}

export default PostDetails