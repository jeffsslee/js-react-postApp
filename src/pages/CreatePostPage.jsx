import React from 'react';

const CreatePostPage = ({
  title,
  setTitle,
  body,
  setBody,
  handleSubmitPost,
}) => {
  return (
    <div className="container mb-5">
      <div className="mb-5">
        <h3>New Post</h3>
      </div>
      <form onSubmit={handleSubmitPost}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="bodyHelp"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div id="bodyHelp" className="form-text">
            How are you today?
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post
          </label>
          <textarea
            rows={6}
            id="body"
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
