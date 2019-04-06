import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './about/About';
import PostsList from './posts/PostsList';
import AuthorPage from './authors/AuthorPage';
import AuthorList from './authors/AuthorList';
import PostPage from './posts/PostPage';


const Main = (props) => {
        return (
            <main>
                <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/author/:userId' component={AuthorPage} />
                    <Route path='/authors' component={AuthorList} />
                    <Route path='/post-page/:postId' component={PostPage} />
                    <Route path='/' component={PostsList} />
                </Switch>

            </main>
        )
    }


export default Main;