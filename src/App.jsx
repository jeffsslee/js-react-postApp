import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'My First Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
    },
    {
      id: 2,
      title: 'My 2nd Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
    },
    {
      id: 3,
      title: 'My 3rd Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
    },
    {
      id: 4,
      title: 'My Fourth Post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
    },
  ]);
  return (
    <>
      <div>
        <div className="text-center">
          <span className="p-2 fs-1">
            My Blog <span className="fs-6">powered by React</span>
          </span>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
          <div className="container container-fluid">
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                // value={search}
                // onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link active" aria-current="page" to="/">
                  Home
                </a>
                <a className="nav-link" to="post">
                  Post
                </a>
                <a className="nav-link" to="about">
                  About
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="container">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="mb-5 border-bottom">
              <a to={`post/${post.id}`} href={`post/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.datetime}</p>
                <p className="text-truncate">{post.body}</p>
              </a>
            </div>
          ))
        ) : (
          <div className="fs-3 m-5 text-center">No Posts to display</div>
        )}
      </div>

      <div style={{ backgroundColor: '#e3f2fd', textAlign: 'center' }}>
        <div className="container py-3">
          <footer>
            <div>Copyright &copy; {new Date().getFullYear()}</div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
