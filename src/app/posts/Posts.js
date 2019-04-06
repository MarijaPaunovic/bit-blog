import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    return (
        <>

            <div>
                <h2>POSTS</h2>
                <div>
                    <h4><Link to="/PostPage">Title 1</Link></h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur. Temporibus reprehenderit quasi impedit, dicta pariatur libero?
                    </p>
                    <hr></hr>
                </div>
                <div>
                    <h4>Title 2</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur. Temporibus reprehenderit quasi impedit, dicta pariatur libero?
                    </p>
                    <hr></hr>
                </div>
                <div>
                    <h4>Title 3</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur. Temporibus reprehenderit quasi impedit, dicta pariatur libero?
                    </p>
                    <hr></hr>
                </div>
                <div>
                    <h4>Title 4</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur. Temporibus reprehenderit quasi impedit, dicta pariatur libero?
                    </p>
                    <hr></hr>
                </div>
            </div>
        </>
    )
}
export default Posts;