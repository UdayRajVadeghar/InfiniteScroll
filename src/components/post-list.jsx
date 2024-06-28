"use client"

import { useState } from "react";

import { getPosts } from "@/actions/get-posts";
import { POST_PER_PAGE } from "@/config/constants";
import PostCard from "./post-card";

const PostList = ({initialPosts}) => {

  const [posts,setPosts] = useState(initialPosts);
  const [currentOffset , setCurrentOffset] = useState(POST_PER_PAGE)
  const [hasMoreData , setHasMoreData] = useState(true)

  const loadMorePosts = async () => {

    

    const apiPosts = await getPosts(currentOffset , POST_PER_PAGE);
    if(!apiPosts.length){
      setHasMoreData(false)
      
    }
    setPosts(prevPost => [...prevPost , ...apiPosts])
    setCurrentOffset(prevCurrentOffset => prevCurrentOffset + POST_PER_PAGE)

  }

  return (
    <div className="text-center">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <div>
        {hasMoreData?(<button 
      className="bg-slate-500  text-white hover:bg-slate-400 py-5 w-full"
      onClick={loadMorePosts}
      >
        Load more posts
      </button>):(<p>No More posts to load</p>) }
      </div>
      
    </div>
  );
}

export default PostList;
