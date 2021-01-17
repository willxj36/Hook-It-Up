import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import PostDetails from './components/postdetails';

 function App() {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await res.json();
        setPosts(posts);
    }

    useEffect(() => {
        getPosts();
    }, [])

    return(
        <>
            <div className="jumbotron jumbotron-fluid bg-primary">
                <h1 className="text-white ml-5 display-2">Fake Posts Catalog!</h1>
            </div>
            <div className="container">
                <div className="col-md-8 p-4 bg-secondary">
                    <h3 className="display-4 text-white">Preview of Fake Posts</h3>
                    <h6 className="text-white">Click the tabs below to navigate to full posts if you want</h6>
                </div>
                <div className="col p-3">
                    <Router>
                        <Link to="/" className="btn btn-lg btn-success">Home - Previews</Link>
                        <Switch>
                            <Route exact path="/">
                                <div className="container">
                                    <div className="row">
                                        {posts.map(post => {
                                            return(
                                                <div key={post.id} className="card border rounded shadow m-2 col-5">
                                                    <h3 className=" m-3 card-title">Title: {post.title}</h3>
                                                    <Link to={`/${post.id}/details`} className="m-3 btn btn-success">Click for post details</Link>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </Route>
                            <Route exact path="/:id/details" component={PostDetails}></Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </>
    )
}

export default App;