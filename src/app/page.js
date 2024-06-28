import { getPosts } from "@/actions/get-posts";
import PostList from "@/components/post-list";
import { POST_PER_PAGE } from "@/config/constants";

export default async function Home(){


  

  const initialPosts = await getPosts(0 , POST_PER_PAGE);

  console.log(initialPosts)

  return (
    <div className="my-10">
      <h1 className="text-center text-2xl underline font-bold">
        NextJs Infinite Scroll
        </h1>
      <PostList initialPosts={initialPosts}/>
    </div>
    
  );
}

