import React from 'react';
import { Link } from 'react-router-dom';
import FetchPosts from '../services/FetchPosts';


class PostPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        FetchPosts()
            .then((posts) => {
                this.setState({
                    posts: posts
                })
                console.log(posts);
            })
    }

    render() {

        return (
            <>
                <div>
                    <h2>SINGLE POST TITLE</h2>
                    <div>
                        <h4><Link to='/author-blog'>Author Name</Link></h4>
                    </div>

                    <div>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur. Temporibus reprehenderit quasi impedit, dicta pariatur libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur. Temporibus reprehenderit quasi impedit, dicta pariatur libero?
                    </p>
                        <hr></hr>
                    </div>

                    <div>
                        <h4>3 more posts from same author</h4>
                        <p><Link to='/author-blog'>Title 10 - velit, vulputate</Link></p>
                        <p><Link to='/author-blog'>Title 11 - velit, vulputate</Link></p>
                        <p><Link to='/author-blog'>Title 12 - velit, vulputate</Link></p>
                        <hr></hr>
                    </div>

                </div>
            </>
        )
    }
}
export default PostPage;