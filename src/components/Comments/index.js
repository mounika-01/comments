import React, { Component } from 'react'
import CommentItem from './CommentItem'
import './index.css'

class CommentsApp extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: [],
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value })
  }

  handleCommentChange = event => {
    this.setState({ comment: event.target.value })
  }

  addComment = event => {
    event.preventDefault()
    const { name, comment, commentsList } = this.state

    if (name && comment) {
      const newComment = {
        id: new Date().getTime(),
        name,
        comment,
        isLiked: false,
        timestamp: new Date(), // Store the timestamp for calculating "time ago"
      }

      this.setState({
        commentsList: [...commentsList, newComment],
        name: '',
        comment: '',
      })
    }
  }

  toggleLike = id => {
    const { commentsList } = this.state
    const updatedCommentsList = commentsList.map(comment =>
      comment.id === id ? { ...comment, isLiked: !comment.isLiked } : comment
    )

    this.setState({ commentsList: updatedCommentsList })
  }

  deleteComment = id => {
    const { commentsList } = this.state
    const filteredCommentsList = commentsList.filter(comment => comment.id !== id)
    
    this.setState({ commentsList: filteredCommentsList })
  }

  render() {
    const { name, comment, commentsList } = this.state

    return (
      <div className="comments-app">
        <h1>Comments</h1>
        
        {/* Image for comments section */}
        <img
          src="https://example.com/comments-image-url"  // Replace with the correct URL
          alt="comments"
        />

        <p>Say Something...</p>
        <form onSubmit={this.addComment}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={this.handleNameChange}
          />
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={this.handleCommentChange}
          />
          <button type="submit">Add Comment</button>
        </form>

        <ul>
          {commentsList.map(commentItem => (
            <CommentItem
              key={commentItem.id}
              commentDetails={commentItem}
              toggleLike={this.toggleLike}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CommentsApp
