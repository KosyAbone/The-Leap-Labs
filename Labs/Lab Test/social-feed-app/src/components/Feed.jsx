import React, { useEffect } from 'react'
import Post from './Post'

function Feed() {

  const posts = [
    { user: "User 1", postMessage: "This is the first post!" },
    { user: "User 2", postMessage: "Check out this post." },
    { user: "User 3", postMessage: "React is amazing!" },
    { user: "User 4", postMessage: "I love coding!" },
  ];

  useEffect(() => {
    console.log('Feed component is mounted');

    // Cleanup function to log when component is unmounted
    return () => {
      console.log('Feed component is unmounted');
    };
  }, []); 

  return (
    <div className="feed">
        <h1>Social Feed</h1>
        <div className='post-container'>
          {posts.map((post, index) => (
            <Post
              key={index}
              user={post.user}
              postMessage={post.postMessage}
            />
          ))}
        </div>
    </div>
  )
}

export default Feed