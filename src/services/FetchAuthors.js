import ShareData from '../shared/ShareData';
import Author from '../entities/Author';


const FetchAuthors = () => (
    fetch(ShareData.url2)
        .then(response => response.json())
        .then(authorsArray => {
            const authors = authorsArray.map((author) => {
                return new Author(author.id, author.name, author.username, author.address.street, author.address.city, author.address.zipcode, author.company.name, author.company.bs)
            }
            )
            return authors
        })
)

export const FetchAuthor = (authorId) => (
    fetch(`${ShareData.url2}/${authorId}`)
        .then(response => response.json())
        .then(author => {
            return new Author(author.id, author.name, author.username, author.address.street, author.address.city, author.address.zipcode, author.company.name, author.company.bs)
        })

);

export default FetchAuthors;
