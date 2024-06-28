const PostCard = ({ post }) => {
  return (
    <div className="border my-4 bg-slate-100 p-10 relative">
      <span className="bg-red-400 text-white p-2 top-0 left-0 absolute">{post.id}</span>
      <h2 className=" font-semibold text-2xl">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostCard;