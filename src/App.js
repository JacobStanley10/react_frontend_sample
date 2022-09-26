import logo from './levvel-logo.svg';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router';
import Blogs from './Blogs'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json_data: [],
      see_author: false,
      which_author: "",
    }
    this.handleAuthorClick = this.handleAuthorClick.bind(this);
  }
  handleAuthorClick(){
    const {see_author} = this.state;
    let see_author_tmp = see_author;
    if (see_author_tmp === false) {
      see_author_tmp = true;
    }
    else{
      see_author_tmp = false;
    }
    this.setState({see_author: see_author_tmp})
  }
  componentDidMount(){
    var url = "https://my-json-server.typicode.com/JacobStanley10/react_frontend_sample/authors"
    const {see_author} = this.state;
    let see_author_tmp = see_author;
    fetch(url, { credentials: 'same-origin' })
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((data) => {
      // console.log(data)
      this.setState({json_data: data, see_author: see_author_tmp})
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
        <BrowserRouter>
          <header className="App-header">
            <p id="header-text">Levvel's Food Blog</p>
          </header>
          {see_author === false ?
              <div id="list_of_authors">
                  <p>Check out Top Posts from our Authors!</p>
                    {json_data.map((entry) =>(
                      <div id="author_list_entry">
                        <Switch>
                          <Route path="/authors" component={<Blogs/>}>{entry.name}</Route>
                        </Switch>
                        {/* <a onClick={this.handleAuthorClick} id="author_name" href="">{entry.name}</a> */}
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
          }
      </BrowserRouter>
      </div>
    )
  }
}

// function App() {
//   FetchData()
//   // fetchData().map(element => {
//   //   console.log(element)
//   // });
//   // console.log(fetchData())
//   // var data_return = []
//   // fetchData().forEach(function(item, index) {
//   //   console.log(item)
//   //   data_return.push(item)
//   // })
//   // var data = ["hey", "hi", "test"]
//   // console.log(data_return);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Levvel's Food Blog</p>
//         <p>Check out Top Posts from our Authors!</p>
        
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//       {/* {data_return.map((entry) => (
//           <div>
//             <p>hey</p>
//           </div>
//         ))} */}
//     </div>
    
//   );
// }

// function FetchData() {
//   // var data_arr = []
//   const [data, setData] = useState([])
//   // var data_arr = []
//   var url = "https://my-json-server.typicode.com/JacobStanley10/react_frontend_sample/authors"
//   fetch(url, { credentials: 'same-origin' })
//   .then((response) => {
//     if (!response.ok) throw Error(response.statusText);
//     return response.json();
//   })
//   .then((data) => {
//     setData(data)
//   })
//   console.log(data)
//   // return data_arr
// }

export default App;
