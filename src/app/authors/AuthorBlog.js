import React from 'react';
import { Link } from 'react-router-dom';

const AuthorBlog = () => {
    return (
        <>

            <div>
                <p><Link to='/authors'> All author</Link></p>
                <h2>SINGLE AUTHOR</h2>

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
export default AuthorBlog;