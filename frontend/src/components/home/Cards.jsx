import React, { Component } from 'react'
import './Cards.css'
import axios from 'axios'
import Nav from '../template/Nav'
import PopOver from '../template/PopOver'


const baseUrl = 'http://localhost:3001'
const initialState = {
    cards: [],
    tags: [],
    tarjas: [],
}

export default class Cards extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(`${baseUrl}/db`).then(resp => {
            this.setState({
                cards: resp.data.cards,
                tags: resp.data.tags,
                tarjas: resp.data.tarja,
            })
        })
    }

    renderCards() {
        return this.state.cards.map(card => {
            return (

                <div className="cards-row" key={card.id}>
                    <div className="row">
                        <div className="column left col-md-6 divider">
                            <div className="row">
                                <i className="name fa fa-plus-circle text-success mt-1" /><td className="ml-2">{card.partes.ativa.name}</td>
                                <i className="name fa fa-minus-circle text-danger ml-2 mt-1" /><td className="ml-2">{card.partes.passiva.name}</td>
                            </div>

                            <div className="row">
                                <td>{card.classe}</td>
                                <td className="mx-1">-</td>
                                <strong>{card.assunto}</strong>
                            </div>

                            <div className="row">
                                {card.numero}

                                <div className="ml-2">
                                    {card.tarja.map(tarja => {
                                        return (
                                            <span className="ml-2" style={{ backgroundColor: tarja.background, color: tarja.color }} >
                                                {tarja.name}
                                            </span>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>


                        <div className="column mid col-md-3">
                            <i className="fa fa-folder-open py-4"></i>
                            Abrir Pasta
                        </div>

                        <div className="column right col-md-3">
                            <div className="row">
                                <div>
                                    <PopOver tags={this.state.tags}
                                       />
                                </div>
                            </div>

                            <div className="ml-2">
                                {card.tag.map(idTag => {

                                    const tag = this.state.tags.find((tag) => {
                                        return tag.id == idTag
                                    })

                                    return (
                                        <span className="tags ml-3" style={{ backgroundColor: tag.background, color: tag.color }} >
                                            {tag.name}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            )
        })
    }

    render() {
        return (

            <React.Fragment>
                <div>
                    {this.renderCards()}
                </div>

                <Nav
                    tags={this.state.tags}
                    cards={this.state.cards}
                >
                </Nav>

                <PopOver tags={this.state.tags}
                ></PopOver>

            </React.Fragment>
        )
    }
}