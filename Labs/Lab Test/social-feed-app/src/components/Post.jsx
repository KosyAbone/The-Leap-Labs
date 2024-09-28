import React, { useState } from 'react'

function Post({ user, postMessage }) {

  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const addComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {  
      const newComment = {
        text: commentText,
        timeStamp: new Date().toLocaleString()
      }
      setComments([...comments, newComment]);
      setCommentText("");
    };
  }

  const addLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  }
    
  return (
    <>
        <div className="post-card">
            <h3 className="post-user">{user}</h3>
            <p className="post-message">{postMessage}</p>
            <button onClick={addLike}className="like-button">Like </button>
            <span className='likes-count'>{likes > 0 && `${likes} likes`}</span>
            <h4>Comments:</h4>
            {comments.map((comment, index) => (
                <p key={index}>{comment.text} <small>{comment.timeStamp}</small></p>
            ))}
            <form onSubmit={addComment}id="comment-form">
                <input
                    id="control-input"
                    type="text"
                    placeholder="Add a comment"
                    aria-label="Comment input"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    </>
  )
}

export default Post