import React from 'react'
import './Nav.css'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="tag-process fa fa-bookmark" /> Todos Processos
            </a>
            <a href="#/users">
                <i className="tag-title fa fa-tag" /> Etiquetas
            </a>
            <a href="#/label">
                <i className="tag-closed" /> Feitos
            </a>
        </nav>
    </aside>