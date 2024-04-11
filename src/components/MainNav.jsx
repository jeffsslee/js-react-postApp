import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = ({ search, setSearch }) => {
  return (
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="post">
                Post
              </Link>
              <Link className="nav-link" to="about">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
