interface PostRow{
  id: string;
  title: string;
  body: string;
}

interface Props {
  post: PostRow,

}

const PostItem = ({post} :Props) => {
  // const { post } = props

  return (
    <div className="PostItem">
      <div>
        <span className="id">No. {post.id}</span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body.slice(0, 120)}...</p>
    </div>
  )
}

export default PostItem