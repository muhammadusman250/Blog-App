"use client";
import { useEffect, useState } from "react";

const CommentSection = ({ id }: { id: string }) => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${id}`);
    if (storedComments) {
      try {
        setComments(JSON.parse(storedComments));
      } catch (error) {
        console.error("Error parsing stored comments:", error);
        setComments([]);
      }
    }
  }, [id]);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setNewComment("");
      localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
    }
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl max-w-3xl mx-auto mt-4">
      <h2 className="text-3xl font-semibold mb-6">Comments</h2>

      <div className="comments-list space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="comment flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm"
            >
              <p className="text-gray-800 text-sm font-medium">{comment}</p>
              <button
                onClick={() => handleDeleteComment(index)}
                className="bg-black text-white px-3 py-1 rounded-md text-xs hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-sm">No comments yet.</p>
        )}
      </div>

      <div className="comment-input mt-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
        />
        <button
          onClick={handleAddComment}
          className="mt-3 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
