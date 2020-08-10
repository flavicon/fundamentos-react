import React from 'react';

import Primeiro from './components/basic/Primeiro';
import ComParametro from './components/basic/Comparametro';
import Fragmento from './components/basic/Fragmento';
import Aleatorio from './components/basic/Aleatorio';
import Card from './components/layout/Card'

export default () =>
    <div id='app'>
        <h1>Fundamentos React</h1>
        <Card titulo = '#04 - Valor Aleatório'>
            <Aleatorio 
                min = {1}
                max = {60}/>
        </Card>

        <Card titulo = '#03 - Fragmento'>
            <Fragmento/> 
        </Card>

        <Card titulo = '#02 - Com Parâmetro'>
            <ComParametro
                titulo='Situação do aluno'
                aluno='Marcos'
                nota={6.9}
            />
        </Card>
        
        <Card titulo = '#01 - Primeiro componente'>
            <Primeiro/>
        </Card>
    </div>
