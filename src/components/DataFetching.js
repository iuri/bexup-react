import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from './Grid';
const App = () => {
  const [items, setItems] = useState([]);


  async function getToken(user,password) {
    await axios.get('http://localhost:8080/getToken')
      .then(response => {
        console.log('Token: ', response.data.token);
        return response.data.token;
      })
      .catch(error => {
        console.error('Error getting token:', error);
      })
    return;
  }

 async function getData(token) {
    
    if (typeof token != 'undefined') {  
      const headers = {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      };
      // console.log(headers);
      await axios.get('http://localhost:8080/api/search/marcas', { headers })
        .then(response => {
          console.log('Marcas: ', response.data.data)  
          setItems(response.data.data);
          return response.data.data;
        })
        .catch(error => {
          // handle console error 
          console.error(error);
        });
    }
    return;
  } 


  useEffect(() => {
    try {
      // retrieving JWT;
      let token = getToken('jphndoe@bexup.com', 'bexup');
      getData(token);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }, []);

  return (
    <div>
      <h1>Marcas</h1>
      <Grid data={items} />
    </div>
  );
};

export default App;
