import React from 'react';
import { Link } from 'react-router-dom';
import FetchAuthor from '../../services/FetchAuthors';
import PostPage from '../../entities/PostPage';
import AuthorList from './AuthorList';

class AuthorPage extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     authors: []
        // }
    }

    // componentDidMount() {
    //     const authorId = this.props.match.params.userId
    //     FetchAuthor()
    //         .then((users) => {
    //             this.setState({
    //                 authors: users
    //             })
    //         })
    // }
    render() {
        // const postPageAuthor = <PostPage
        //     authorName={this.state.author.username}
        // />
        return (
            <>
                <div>
                    <h2>{this.props.author}</h2>

                    <div>
                        <img src='' alt='' />
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