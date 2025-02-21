import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [id, setId] = useState(0);
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

  const Fetchpost = (id) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setData([response.data]);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      })
  }

  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <h1>To fetch a particular post</h1>
      <input type="text" placeholder="Enter post id" onChange={e=>setId(e.target.value)}/>
      <button onClick={()=>Fetchpost(id)}>Fetch Post</button>
      <hr />

      <h1>Posts</h1>
        {data.map(post => (
          <Posts key={post.id} title={post.title} body={post.body}></Posts>
        ))}
    </div>
  )
}

function Posts(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  )
}


export default App;