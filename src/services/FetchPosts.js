import ShareData from '../shared/ShareData';
import Post from '../entities/Post';

const FetchPosts = () => (
    fetch(ShareData.url)
        .then(response => response.json())

        .then(apiPosts => {
            const posts = apiPosts
                .map((post) => {
                    return new Post(post.id, post.title, post.body, post.userId)

                })

            return posts
        })
)

const FetchPost = (id) => (
    fetch(`${ShareData.url}/${id}`)
        .then(response => response.json())
        .then(post => {
            return new Post(post.id, post.title, post.body, post.userId)
        })
);

const createPost = (title, body, userId) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(post => new Post(post.userId, post.id, post.title, post.body))
}

export {
    FetchPosts,
    FetchPost,
    createPost
}