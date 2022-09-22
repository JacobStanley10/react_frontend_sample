import logo from './levvel-logo.svg';
import './App.css';

function App() {
  var data = fetchData();
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function fetchData() {
  var data_arr = []
  var url = "https://my-json-server.typicode.com/JacobStanley10/react_frontend_sample/authors"
  fetch(url, { credentials: 'same-origin' })
  .then((response) => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  })
  .then((data) => {
    data.forEach(function (item, index) {
      data_arr.push(item);
    });
  })
  return data_arr
}

export default App;
