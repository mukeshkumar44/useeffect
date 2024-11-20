import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = () => {
  const [data, setData] = useState([]);
 

  const fetch = async () => {
      try {
          const response = await axios.get('https://fakestoreapi.com/products');
          console.log(response .data);
          
          setData(response.data);
        } catch (err) {
            console.log(err);
            
            
        } 
    };
    
    useEffect(() => {
        fetch();
  }, []);

  
  return (
    <div>
      {data.map(post => (
          <div>
            <img src={post.image} alt="" />
          <h3>{post.title}</h3>
          <p>{post.id}</p>
          <p>{post.body}</p>
   </div> 
      ))}
    </div>
  );
};

export default ApiCall;

