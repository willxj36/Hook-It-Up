import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

App = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json)
            .then(obj => setPosts(obj))
            .catch(err => console.log(err))
    }, [])

    postPreview = () => {
        posts.map((post) => {
            return(
                <div className="container">
                    <div className="card"></div>
                </div>
            )
        })
    }

    return(
        <>
            <div className="jumbotron jumbotron-fluid bg-primary">
                <h1 className="display-5">Fake Posts Catalog!</h1>
            </div>
            <div className="container">
                <div className="col-md-8 bg-secondary">
                    <h3 className="display-3 text-white">Preview of Fake Posts</h3>
                    <h6 className="text-white">Click the tabs below to navigate to full posts if you want</h6>
                </div>
                <div className="col">
                    <Router>
                        <Link to="/" className="btn btn-lg btn-success">Home - Previews</Link>
                        <Switch>
                            <Route exact path="/"></Route>
                            <Route exact path="/:id/details" component={PostDetails}></Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </>
    )
}

export default App;