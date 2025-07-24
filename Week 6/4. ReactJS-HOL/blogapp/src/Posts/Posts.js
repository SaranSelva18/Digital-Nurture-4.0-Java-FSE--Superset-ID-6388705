import React from 'react';
import Post from './Post'; 

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {
        this.setState({
          posts: posts.map(p => new Post(p.id, p.title, p.body))
        });
      })
      .catch(error => {
        this.setState({ error: 'Failed to fetch posts' });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('Error: ' + error);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h1>Posts</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export { Posts };
