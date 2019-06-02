import React, { Component } from 'react'
import './Nav.css'
// import { Button } from 'reactstrap'


export default class Nav extends Component {

    render() {

        return (
            <aside className="menu-area">
                <div className="menu">
                    <div className="process">
                        <strong>Processos</strong>

                        <div className="allProcess pt-3">
                            <i className="process-icon fa fa-bookmark" />
                            <span className="ml-1"> Todos os Processos </span>
                        </div>

                        <div className="tags pt-3">
                            Etiquetas
                        </div>

                        <div className="col-xs-12">
                            <i className="tag-icon fa fa-tag" />
                            <input id='description' className="newTag mt-3"
                                placeholder=' Criar Etiqueta' onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = " Criar Etiqueta"} />
                            <i className="check fa fa-check" />
                        </div>

                    </div>

                    <hr />
                    <div className="doneProcess">
                        <strong>Feitos</strong>
                    </div>


                </div>
            </aside>
        )
    }

}