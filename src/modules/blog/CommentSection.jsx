import React, { useState } from 'react';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([
    { id: 1, user: 'JohnDoe', avatar: '/avatars/1.png', content: 'Great article!', timestamp: '2023-05-20T10:30:00Z' },
    { id: 2, user: 'JaneSmith', avatar: '/avatars/2.png', content: 'Very informative, thanks!', timestamp: '2023-05-20T11:15:00Z' },
    { id: 3, user: 'JaneSmith', avatar: '/avatars/2.png', content: 'Very informative, thanks!', timestamp: '2023-05-20T11:15:00Z' },
    { id: 4, user: 'JaneSmith', avatar: '/avatars/2.png', content: 'Very informative, thanks!', timestamp: '2023-05-20T11:15:00Z' },
    { id: 5, user: 'JaneSmith', avatar: '/avatars/2.png', content: 'Very informative, thanks!', timestamp: '2023-05-20T11:15:00Z' },
    { id: 6, user: 'JaneSmith', avatar: '/avatars/2.png', content: 'Very informative, thanks!', timestamp: '2023-05-20T11:15:00Z' },

    // Add more comments for testing scrolling
  ]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new comment logic here
  };

  return (
    <div className="p-4">
      <h3 className="mb-4 text-xl font-semibold main-title">Comments</h3>
      <div className="mb-4 overflow-y-auto max-h-80">
        {comments.map(comment => (
          <div key={comment.id} className="p-3 mb-3 rounded-lg bg-gray-50">
            <div className="flex items-center mb-2">
              <img src={comment.avatar} alt={comment.user} className="w-8 h-8 mr-2 rounded-full" />
              <span className="text-sm font-semibold">{comment.user}</span>
              <span className="ml-2 text-xs text-gray-500">{new Date(comment.timestamp).toLocaleString()}</span>
            </div>
            <p className="text-sm fm-txt">{comment.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
          placeholder="Add a comment..."
          rows="3"
        />
        <button type="submit" className="px-4 py-2 mt-2 text-sm text-white transition duration-300 bg-indigo-500 rounded-lg hover:bg-indigo-600 btn-font">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
