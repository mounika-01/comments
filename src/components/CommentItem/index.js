import React from 'react'
import { formatDistanceToNow } from 'date-fns' // Importing to calculate the time ago

const CommentItem = ({ commentDetails, toggleLike, deleteComment }) => {
  const { id, name, comment, isLiked, timestamp } = commentDetails

  return (
    <li>
      <h3>{name}</h3>
      <p>{comment}</p>
      
      {/* Time posted */}
      <p>{formatDistanceToNow(new Date(timestamp))} ago</p>

      {/* Like Image */}
      <img
        src={isLiked ? 'https://example.com/liked-image-url' : 'https://example.com/like-image-url'}
        alt="like"
        onClick={() => toggleLike(id)}  // Clicking the image toggles the like state
      />

      {/* Delete Image */}
      <img
        src="https://example.com/delete-image-url"
        alt="delete"
        onClick={() => deleteComment(id)}
      />

      {/* Optional buttons if needed */}
      <button onClick={() => toggleLike(id)}>
        {isLiked ? 'Unlike' : 'Like'}
      </button>
      <button onClick={() => deleteComment(id)}>
        Delete
      </button>
    </li>
  )
}

export default CommentItem
