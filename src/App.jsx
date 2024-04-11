import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from '@/Layout';
import DefaultPage from '@/pages/DefaultPage';
import CreatePostPage from '@/pages/CreatePostPage';
import ViewPostPage from '@/pages/ViewPostPage';
import AboutPage from '@/pages/AboutPage';
import { format } from 'date-fns';

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

  const [search, setSearch] = useState('');
  const [searchedList, setSearchedList] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        post.body.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setSearchedList(filteredPosts);
    navigate('/');
  }, [search, posts]);

  const handleSubmitPost = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    // if object name and value(name) is same, just write 1 time.
    const newPost = { id, title, datetime, body };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setTitle('');
    setBody('');
    navigate('/');
  };

  const handleDeletePost = (id) => {
    const filteredPosts = posts.filter((post) => Number(post.id) !== id);
    setPosts(filteredPosts);
    navigate('/');
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout search={search} setSearch={setSearch} />}
      >
        <Route index element={<DefaultPage posts={searchedList} />} />
        <Route path="post/">
          <Route
            index
            element={
              <CreatePostPage
                title={title}
                setTitle={setTitle}
                body={body}
                setBody={setBody}
                handleSubmitPost={handleSubmitPost}
              />
            }
          />
          <Route
            path=":id"
            element={
              <ViewPostPage posts={posts} handleDeletePost={handleDeletePost} />
            }
          />
        </Route>
        <Route path="about/" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
