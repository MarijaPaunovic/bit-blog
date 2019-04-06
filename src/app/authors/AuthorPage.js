import React from 'react';
import { Link } from 'react-router-dom';
import { FetchAuthor } from '../../services/FetchAuthors';



class AuthorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.userId
        FetchAuthor(id)
            .then((author) => {
                console.log(author)
                this.setState({
                    author
                })
            })
    }

    render() {
        return (
            <>
                <div>
                    <div>
                        <span><Link to={`/authors`}> &lsaquo; All authors</Link></span>
                        <h2 className='authorTitle'>SINGLE AUTHOR</h2>
                    </div>

                <div className='authorPicture'>
                    <img src='https://via.placeholder.com/150' alt='' />
                </div>

                    <div className='authorInfo'>
                        <h4>{this.state.author.name}</h4>
                        <p>username: {this.state.author.username}</p>
                        <p>email: {this.state.author.email}</p>
                        <p>phone: {this.state.author.phone}</p>
                    </div>

                    <hr></hr>

                    <div className='authorAddress'>
                        <h4>Address</h4>
                        <p>street: {this.state.author.street}</p>
                        <p>city: {this.state.author.city}</p>
                        <p>zipcode: {this.state.author.zipCode}</p>
                    </div>
                    
                    <div className='authorAddressMap'>
                    <iframe src={`https://maps.google.com/maps?q=${this.state.author.geoLat},${this.state.author.geoLng}&hl=es;z=14&amp;&output=embed`}>
                    </iframe>
                    </div>

                    <hr></hr>

                    <div className='authorCompany'>
                        <h4>Company</h4>
                        <p>name: {this.state.author.companyName}</p>
                        <p>slogan:  {this.state.author.companyBs}</p>
                    </div>
                    
                    <hr></hr>

                </div>
            </>
        )
    }
}

export default AuthorPage;