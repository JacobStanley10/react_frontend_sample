import logo from './levvel-logo.svg';
import './App.css';
import React from 'react';

class Blogs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          json_data: [],
        }
        this.handleAuthorClick = this.handleAuthorClick.bind(this);
      }
      componentDidMount(){
        var url = "https://my-json-server.typicode.com/JacobStanley10/react_frontend_sample/authors"

        fetch(url, { credentials: 'same-origin' })
        .then((response) => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then((data) => {
          // console.log(data)
          this.setState({json_data: data})
        })
      }
      render(){
        const { json_data, see_author } = this.state;
        console.log(json_data)
        // data_json.forEach(element => {
        //   console.log(element);
        //   console.log("in for loop")
        // });
        return (
          <div className="App">
            <header className="App-header">
              <p id="header-text">Levvel's Food Blog</p>
            </header>
            {/* {see_author === false ?
                <div id="list_of_authors">
                    <p>Check out Top Posts from our Authors!</p>
                      {json_data.map((entry) =>(
                        <div id="author_list_entry">
                          <a onClick={this.handleAuthorClick} id="author_name" href="">{entry.name}</a>
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
              :
              <p>Just the author!</p>
            } */}
          
          </div>
        )
      }
}