export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    
    const paths = data.map(posts => {
        return {
            params: {
                id: posts.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ id }`)
    const data = await res.json()

    return {
        props: { 
            post: data 
        }
    }
}

const SinglePost = ({ post }) => {
    return (
        <div>
            <h1>Post with id { post.id }</h1>
            <h2>{ post.title }</h2>
            <p>{ post.body }</p>
        </div>
    );
}
 
export default SinglePost;