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

export {
    FetchPosts,
    FetchPost
}