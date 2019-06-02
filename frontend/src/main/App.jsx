import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Nav from '../components/template/Nav'
import Home from '../components/home/Home'
import Search from '../components/template/Search'
import Cards from '../components/home/Cards'

export default props =>
    <div className="app">
        
        <Search />
        <Nav />
        <Home />
        
    </div>