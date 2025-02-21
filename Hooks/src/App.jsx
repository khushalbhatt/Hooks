import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <h1>Posts</h1>
        {data.map(post => (
          <Posts key={post.id} title={post.title}></Posts>
        ))}
    </div>
  )
}

function Posts(props) {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  )
}


export default App;