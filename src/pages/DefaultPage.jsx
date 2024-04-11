import { Link } from 'react-router-dom';

const DefaultPage = ({ posts }) => {
  return (
    <div className="container">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="mb-5 border-bottom">
            <Link to={`post/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.datetime}</p>
              <p className="text-truncate">{post.body}</p>
            </Link>
          </div>
        ))
      ) : (
        <div className="fs-3 m-5 text-center">No Posts to display</div>
      )}
    </div>
  );
};

export default DefaultPage;
