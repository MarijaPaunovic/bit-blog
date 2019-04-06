import React from 'react';
import { FetchAuthor } from '../../services/FetchAuthors';
import { FetchPost } from '../../services/FetchPosts';

class AuthorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            author: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.postId
        FetchPost(id)
            .then((post) => {
                console.log(post);
                this.setState({
                    post: post
                })
                FetchAuthor(this.state.post.userId)
                    .then((author) => {
                        console.log(author);
                        this.setState({
                            author: author
                        })
                    }
                    )

            })
    }

    render() {
        return (
            <>
                <div>
                    <h2>SINGLE AUTHOR</h2>

                    <div>
                        <img src='https://via.placeholder.com/150' alt='' />
                        <h3>Name Surname</h3>
                        <p>username: ___________</p>
                        <p>email: ___________</p>
                        <p>phone: ___________</p>

                        <hr></hr>
                    </div>

                    <div>
                        <h3>Address</h3>
                        <p>street: ___________</p>
                        <p>city: ___________</p>
                        <p>zipcode: ___________</p>
                        <iframe>
                            Google MAP ubaciti !!!
                    </iframe>

                        <hr></hr>
                    </div>

                    <div>
                        <h3>Company</h3>
                        <p>name: ___________</p>
                        <p>slogan: ___________</p>

                        <hr></hr>
                    </div>

                </div>
            </>
        )
    }
}

export default AuthorPage;