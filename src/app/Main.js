import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './about/About';
import PostsList from '../entities/PostsList';
import Author from './authors/Author';
import AuthorBlog from './authors/AuthorBlog';
import PostPage from '../entities/PostPage';
import FetchPosts from '../shared/ShareData';


class Main extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={PostsList} />
                    <Route exact path='/authors' component={Author} />
                    <Route exact path='/about' component={About} />
                    <Route path='/author-blog' component={AuthorBlog} />
                    <Route path='/post-page' component={PostPage} />


                </Switch>

            </main>
        )
    }
}

export default Main;