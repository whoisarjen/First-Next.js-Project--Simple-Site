import Link from "next/link"

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return {
    props: { posts: data }
  }

}

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>Blog</h1>
      {
        posts.map(post => (
              <Link href={ `/blog/${ post.id }` } key={ post.id }>
                <a><h2>{ post.title }</h2></a>
              </Link>
          )
        )
      }
    </div>
  );
}
 
export default Posts;