import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './about/About';
import PostsList from '../entities/PostsList';
import AuthorPage from './authors/AuthorPage';
import AuthorList from './authors/AuthorList';
import PostPage from '../entities/PostPage';
// import FetchPosts from '../shared/ShareData';


class Main extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={PostsList} />
                    <Route exact path='/author/:userId' component={AuthorPage} />
                    <Route exact path='/about' component={About} />
                    <Route path='/authors' component={AuthorList} />
                    <Route path='/post-page/:postId' component={PostPage} />
                </Switch>

            </main>
        )
    }
}

export default Main;