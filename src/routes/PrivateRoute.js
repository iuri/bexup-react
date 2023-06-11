import React from 'react';
<<<<<<< HEAD

// React-router-dom
import { Route, Navigate } from 'react-router-dom';

export const PrivateRouter = ({ component: Component, isAuthenticated, ...rest }) => {



=======
// React-router-dom
import { Route, Redirect } from 'react-router-dom';

export const PrivateRouter = ({ component: Component, isAuthenticated, ...rest }) => {
>>>>>>> login
    return (
        <>
            {isAuthenticated ? <Route {...rest} render={props => (
                <Component {...props} />
<<<<<<< HEAD
            )} /> : <Navigate to="/auth/login" />}
        </>
        /*   loggedIn  
          ? 
          <Route {...rest} render={props => (
                  <Component {...props} />  
          )} />   
          :
          <Redirect to="/auth/login" /> */
=======
            )} /> : <Redirect to="/auth/login" />}
        </>
>>>>>>> login
    )
}
