import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import Grid from '../components/Grid';
import { logout } from '../actions/auth';

export const HomeScreen = React.memo(() => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  const closeSession = () => {
    localStorage.clear();
    dispatch(logout());
  }
  const url = 'http://localhost:8080/api/search/marcas';
  async function getToken(url, user, password) {
    await axios.get(url)
      .then(response => {
        console.log('Token: ', response.data.token);
        return response.data.token;
      })
      .catch(error => {
        console.error('Error getting token:', error);
      })
    return;
  }

 async function getData(url, token) {
    
    if (typeof token != 'undefined') {  
      const headers = {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      };
      // console.log(headers);
      await axios.get(url, { headers })
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
      let token = getToken('http://localhost:8080/getToken','jphndoe@bexup.com', 'bexup');
      getData(url, token);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }, []);

  return (
    <div>
    <div className="site_header">
      <div className="left_logo">
        <h1>Marcas</h1>
      </div>
      <div className="right_text">
        <div className="pweroff">
          <img onClick={closeSession}  src="/assets/icons/closesession.svg" alt="iconPerson" />
        </div>
      </div>
    </div>
    <Grid data={items} />
    </div>
  );

});
