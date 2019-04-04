import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './about/About';
import Posts from '../entities/Posts';
import Author from './authors/Author';
import AuthorBlog from './authors/AuthorBlog';
import PostPage from '../entities/PostPage'


class Main extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/Posts' component={Posts} />
                    <Route exact path='/Author' component={Author} />
                    <Route exact path='/About' component={About} />
                    <Route path='/AuthorBlog' component={AuthorBlog} />
                    <Route path='/PostPage' component={PostPage} />

                </Switch>

            </main>
        )
    }
}

export default Main;