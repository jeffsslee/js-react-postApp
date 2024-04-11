import { useParams } from 'react-router-dom';

const ViewPostPage = ({ posts, handleDeletePost }) => {
  const { id } = useParams();
  const currentPost = posts.find((post) => post.id.toString() === id);
  return (
    <div className="container">
      {currentPost && (
        <div>
          <h2>{currentPost.title}</h2>
          <div>{currentPost.datetime}</div>
          <div className="my-4">{currentPost.body}</div>
          <div className="mb-5">
            <button
              className="btn btn-danger"
              onClick={() => handleDeletePost(currentPost.id)}
            >
              Delete Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPostPage;
