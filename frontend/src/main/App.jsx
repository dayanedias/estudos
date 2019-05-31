import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Nav from '../components/template/Nav'
import Home from '../components/home/Home'
import Search from '../components/template/Search'

export default props =>
    <div className="app">
        <Nav />
        <Search />
        <Home />
    </div>