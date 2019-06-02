import React from 'react'
import './Main.css'
import Header from './Header'
import Cards from '../home/Cards'

export default props =>
    <React.Fragment>
        <Header {...props}/>
        <div className="main">
            <Cards />
        </div>
    </React.Fragment>