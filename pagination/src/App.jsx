import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import Pagination from './components/Pagination';
import Posts from './components/posts';



function App() {

  const [posts, setPosts] =useState([]);
  const [loading, setLoading] =useState(false);
  const [currentPage, setCurrentPage] =useState(1);
  const [postPerPage] =useState(10);

  useEffect(()=>{
    const fetchPosts= async ()=>{
      setLoading(true);
      const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  //get current posts
  const indexOfLastPost=currentPage*postPerPage;
  const indexOfFirstPage=indexOfLastPost-postPerPage;
  const currentPosts=posts.slice(indexOfFirstPage, indexOfLastPost);



  return (
    <div className='container'>
      <h1 className='text-primary'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />

    </div>
  )
}

export default App
