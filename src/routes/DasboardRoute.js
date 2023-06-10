import React from 'react'
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
    )
}
