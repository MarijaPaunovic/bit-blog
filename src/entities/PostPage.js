import React from 'react';
import { Link } from 'react-router-dom';
import { FetchPost } from '../services/FetchPosts';
import { FetchAuthor } from '../services/FetchAuthors';


class PostPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            author: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.postId
        FetchPost(id)
            .then((post) => {
                this.setState({
                    post: post
                })
                FetchAuthor(this.state.post.userId)
                    .then((author) => {
                        this.setState({
                            author: author
                        })
                    }
                    )

            })
    }

    render() {
        const author = this.state.author;
        return (
            <>
                <div>
                    <div>
                        <div>
                            <h2>{this.props.match.params.postId} - {this.state.post.title}</h2>
                            <h4><Link to={`/author/${this.state.post.userId}`}>
                                {author.name}  2
                                {author.username} 2
                            </Link></h4>
                        </div>
                        <p>{this.state.post.body}</p>
                        <hr />
                        <div>
                            <h4>3 more posts from same author</h4>
                            <p><Link to='/author-blog'>Title 10 - velit, vulputate</Link></p>
                            <p><Link to='/author-blog'>Title 11 - velit, vulputate</Link></p>
                            <p><Link to='/author-blog'>Title 12 - velit, vulputate</Link></p>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
export default PostPage;