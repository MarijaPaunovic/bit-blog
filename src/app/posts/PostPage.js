import React from 'react';
import { Link } from 'react-router-dom';
import { FetchPosts, FetchPost } from '../../services/FetchPosts';
import { FetchAuthor, FetchAuthorPosts } from '../../services/FetchAuthors';



class PostPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // posts: [],
            post: [],
            author: {},
            authorPosts: []
        }
    }

    componentDidMount() {
        // FetchPosts()
        // .then((posts) => {
        //     console.log(posts)
        //     this.setState({
        //         posts
        //     })
        // })
        const id = this.props.match.params.postId
        FetchPost(id)
            .then((post) => {
                console.log(post)
                this.setState({
                    post
                })
        FetchAuthor(this.state.post.userId)
            .then((author) => {
                console.log(author)
                this.setState({
                    author
                })
                })
        FetchAuthorPosts(this.state.post.userId)
            .then((authorPosts) => {
                console.log(authorPosts)
                this.setState({
                    authorPosts: authorPosts.filter(authorPosts => authorPosts.id, authorPosts.title)
                })
            })
        })
    }

    render() {
        const author = this.state.author;
        const ap = this.state.authorPosts;
        return (
            <>
                <div>
                    <div>
                        <div>
                            <h3>{this.state.post.title}</h3>
                            <h4><Link to={`/author/${this.state.post.userId}`}>
                                {author.name}

                            </Link></h4>
                        </div>
                        <p>{this.state.post.body}</p>
                        <hr />
                        <div>
                            <h4>3 more posts from same author</h4>
                            <p><Link to={`/post-page/${this.state.post.userId}`}>Title 11 - velit, velputate eu pharetra nec</Link></p>
                            <p><Link to={`/post-page/${this.state.post.userId}`}>Title 12 - tortor mauris molestie eli</Link></p>
                            <p><Link to={`/post-page/${this.state.post.userId}`}>Title 13 - enean velit odio</Link></p>
                        <br></br>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
export default PostPage;