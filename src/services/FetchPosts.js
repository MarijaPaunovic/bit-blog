import ShareData from '../shared/ShareData';
import Post from '../entities/Post';

const FetchPosts = () => (
    fetch(ShareData.url)
        .then(response => response.json())

        .then(apiPosts => {
            const posts = apiPosts
                .map((post) => {
                    // const { id, title, body } = post;
                    return new Post(post.id, post.title, post.body)

                })

            return posts
        })
)

export default FetchPosts;