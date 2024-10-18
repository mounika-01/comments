import React from 'react'
import CommentItem from './commentItem'; // if file is named commentItem.js



import {formatDistanceToNow} from 'date-fns' // Importing to calculate the time ago

const CommentItem = ({commentDetails, toggleLike, deleteComment}) => {
  const {id, name, comment, isLiked, timestamp} = commentDetails

  return (
    <li>
      <h3>{name}</h3>
      <p>{comment}</p>
      <p>{formatDistanceToNow(new Date(timestamp))} ago</p>

      <img
        src={
          isLiked
            ? 'https://example.com/liked-image-url'
            : 'https://example.com/like-image-url'
        }
        alt="like"
        onClick={() => toggleLike(id)}
      />
      <button onClick={() => toggleLike(id)}>
        {isLiked ? 'Unlike' : 'Like'}
      </button>

      <img
        src="https://example.com/delete-image-url"
        alt="delete"
        onClick={() => deleteComment(id)}
        data-testid="delete"
      />
      <button onClick={() => deleteComment(id)} data-testid="delete">
        Delete
      </button>
    </li>
  )
}

export default CommentItem
