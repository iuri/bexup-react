import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { HomeScreen } from '../Pages/HomeScreen'
import {  SearchScreen } from '../Pages/SearchScreen'
import { Navbar } from '../components/Navbar'

export const DashboardRouter = () => {
    return (
        <>
            <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/search" component={SearchScreen} />
                <Redirect  to="/" />
            </Switch>
            </div>
        </>
    )
}
