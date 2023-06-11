import React from 'react'
<<<<<<< HEAD

import { Route, Navigate } from 'react-router-dom'


export const PublicRoute =({component: Component,isAuthenticated, ...rest}) => {

    
    return(
        <>
        {isAuthenticated ? <Navigate to="/" />   :  <Route  {...rest} render={props => (
            <Component {...props} />  
    )}  />}
    </>
    )
    }
=======
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute =({component: Component,isAuthenticated, ...rest}) => { 
    return(
        <>
            {isAuthenticated ? <Redirect to="/" />   :  <Route  {...rest} render={props => (
                <Component {...props} />  
            )} />}
        </>
    )
}
>>>>>>> login
    