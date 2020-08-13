import './App.css'
import React from 'react';

import Primeiro from './components/basic/Primeiro';
import ComParametro from './components/basic/Comparametro';
import Fragmento from './components/basic/Fragmento';
import Aleatorio from './components/basic/Aleatorio';
import Card from './components/layout/Card'

export default () =>
    <div className='App'>
        <h1>Fundamentos React</h1>
        
        <div className="Cards">
            <Card titulo='#04 - Valor Aleatório' color="#6A5ACD">
                <Aleatorio
                    min={1}
                    max={60} />
            </Card>

            <Card titulo='#03 - Fragmento' color="#00CED1">
                <Fragmento />
            </Card>

            <Card titulo='#02 - Com Parâmetro' color="#008B8B">
                <ComParametro 
                    titulo='Situação do aluno'
                    aluno='Marcos'
                    nota={6.9}
                />
            </Card>

            <Card titulo='#01 - Primeiro componente' color="#F08080">
                <Primeiro />
            </Card>
        </div>
    </div>
