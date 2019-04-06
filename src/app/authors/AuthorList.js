import React from 'react';
import { Link } from 'react-router-dom';
import { FetchAuthors } from '../../services/FetchAuthors';
import { FetchAuthor } from '../../services/FetchAuthors';
import Author from '../../entities/Author';


class AuthorList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authors: [],
        }
    }

    componentDidMount() {
        FetchAuthors()
            .then((authors) => {
                 console.log(authors)
                this.setState({
                    authors
                })
        }) 
    }

    renderAuthors() {
        return this.state.authors.map((author) => {
            console.log(author)
            return <div key={author.id}>
            <Link to={`/author/${author.userId}`}>{author.name} (2 - posts)</Link>
            <hr></hr>
            </div>
        })
    }

    render() {
        
    return (
        <>
            <div>
                <h2>AUTHORS ({this.state.authors.length})</h2>

                <div>
                    {this.renderAuthors()}                    
                </div>

            </div>
        </>
    )
}
}

export default AuthorList;