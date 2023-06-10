import React from 'react'

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
    