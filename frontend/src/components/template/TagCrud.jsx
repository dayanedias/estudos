import React, { Component } from 'react'
import axios from 'axios'
import Nav from './Nav'


const baseUrl = 'http://localhost:3001/tags'
const initialState = {
    tag: { name: '', color: '' },
    list: []
}

export default class TagCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

     saveTag = () => {
      
     }

    renderForm(){
        
    }

    render() {
        // console.log(this.state.list)
        return (
            <Nav>
                {/* {this.renderForm()} */}
            </Nav>
        )
    }

}