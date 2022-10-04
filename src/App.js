import React from "react";
import { Outlet, Link } from "react-router-dom";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json_data: [],
    }
  }

  componentDidMount(){
    var url = "https://my-json-server.typicode.com/JacobStanley10/react_frontend_sample/authors"
    fetch(url, { credentials: 'same-origin' })
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((data) => {
      this.setState({json_data: data})
    })
  }

  render(){
    const { json_data } = this.state;

    return (
      <div className="App">
          <header className="App-header">
            <p id="header-text">Levvel's Food Blog</p>
          </header>
              <div id="list_of_authors">
                  <p>Check out Top Posts from our Authors!</p>
                    {json_data.map((entry) =>(
                      <div id="author_list_entry">
                        <Link to="/Blogs" state={{ author: entry.name, author_blogs: entry.blogs }}>{entry.name}</Link>
                          <div id="author_blog_entry">
                            <div id="text_in_blog_entry">
                              <p id="title">{entry.blogs[0].title}</p>
                              <p id="description">{entry.blogs[0].description}</p>
                            </div>
                          </div>
                          <br/>
                      </div>
                    ))}
                </div>
      <Outlet />
      </div>
    )
  }
}

export default App;
