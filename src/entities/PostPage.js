import React from 'react';
import { Link } from 'react-router-dom';

const PostPage = () => {
    return (
        <>

            <div>
                <h2>SINGLE POST TITLE</h2>
                <div>
                    <h4><Link to="/AuthorBlog">Author Name</Link></h4>
                </div>

                <div>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur. Temporibus reprehenderit quasi impedit, dicta pariatur libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur. Temporibus reprehenderit quasi impedit, dicta pariatur libero?
                    </p>
                    <hr></hr>
                </div>

                <div>
                    <h4>3 more posts from same author</h4>
                    <p><Link to="/AuthorBlog">Title 10 - velit, vulputate</Link></p>
                    <p><Link to="/AuthorBlog">Title 11 - velit, vulputate</Link></p>
                    <p><Link to="/AuthorBlog">Title 12 - velit, vulputate</Link></p>
                    <hr></hr>
                </div>

            </div>
        </>
    )
}
export default PostPage;