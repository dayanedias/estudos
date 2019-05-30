import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Nav from '../components/template/Nav'
import Main from '../components/template/Main'

export default props =>
    <div className="app">
        <Nav />
        <Main title="APP">

        </Main>
    </div>