import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    //values: []
    posts: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/posts')
    .then((response) => {
      this.setState({
        //values: response.data
        posts: response.data
      })
    })
    .catch((error) => {
      console.error(`Error fetching data: ${error}`);
    })
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <header className="App-header">  
          <h1><img src={logo} className="App-logo" alt="Bear Box Logo" /> Bear Box</h1>
        </header>

        <main className="App-main">

          {posts.map((post: any) =>
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.date}</p>
              <p>{post.body}</p>
            </div>
          )}
        
        </main>

        <footer className="app-footer">
          <p>&copy; 2009 Ted Balmer</p>
        </footer>
      </div>
    );
  }
}

export default App;
