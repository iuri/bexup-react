import React from 'react'
<<<<<<< HEAD
import { Routes, Route, Navigate } from 'react-router-dom'
import { HomeScreen } from '../components/HomeScreen'
import {  SearchScreen } from '../components/SearchScreen'
import { Navbar } from '../components/Navbar'

export const DashboardRouter = () => {
    
    return (
            <div>
            <Navbar/>
            <Routes>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/search" component={SearchScreen} />
                <Navigate  to="/" />
            </Routes>
            </div>
=======
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
>>>>>>> login
    )
}
