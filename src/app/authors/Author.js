import React from 'react';
import { Link } from 'react-router-dom';

const Author = () => {
    return (
        <>

            <div>
                <h2>AUTHORS (6)</h2>

                <div>
                    <p><Link to='/author-blog'>Name Surname (2 - posts)</Link></p>
                    <hr></hr>
                </div>

                <div>
                    <p><Link to='/author-blog'>Name Surname (2 - posts)</Link></p>
                    <hr></hr>
                </div>

                <div>
                    <p><Link to='/author-blog'>Name Surname (2 - posts)</Link></p>
                    <hr></hr>
                </div>

                <div>
                    <p><Link to='/author-blog'>Name Surname (2 - posts)</Link></p>
                    <hr></hr>
                </div>

                <div>
                    <p><Link to="/AuthorBlog">Name Surname (2 - posts)</Link></p>
                    <hr></hr>
                </div>
            </div>
        </>
    )
}
export default Author;