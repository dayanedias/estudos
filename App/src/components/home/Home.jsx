import React, { Component } from 'react'
import Main from '../template/Main'
import Cards from '../home/Cards'

export default class Home extends Component {

    render() {
        return (
            <Main title="APP">
                <Cards />
            </Main>
        )
    }

}