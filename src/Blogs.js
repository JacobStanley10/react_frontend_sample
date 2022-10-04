import './App.css';
import { useLocation } from 'react-router-dom'
import React from 'react';

function Blogs () {
  const location = useLocation();
  const { author, author_blogs } = location.state;
  console.log(author, author_blogs);
  return (
    <div className="Blogs">
      <header className="App-header">
        <p id="header-text">Levvel's Food Blog</p>
      </header>
      <h1>{author}</h1>
      <h2>Check out {author}'s Recipes!</h2>
      {author_blogs.map((entry) => (
        <div id="author_blog_entry">
          <div id="text_in_blog_entry">
            <p id="title">{entry.title}</p>
            <p id="description">{entry.description}</p>
          </div>
          &nbsp;
        </div>
      ))}
    </div>
  )
}

export default Blogs;
