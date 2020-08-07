import ReactDOM from 'react-dom'

import React from 'react'

import Primeiro from './components/basic/Primeiro'

import ComParametro from './components/basic/Comparametro'

import './index.css'

//const tag = <strong>Olá react</strong>

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro titulo = 'Situação do aluno' 
        aluno = 'Marcos' nota = {6.9} />
    </div>,
    document.getElementById('root')
)