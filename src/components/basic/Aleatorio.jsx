import React from 'react';

export default (props) => {

    const { min, max } = props;
    const aleatorio = parseInt((Math.random() * (max - min) + min));
    return (
        <div>
            <h1>Valor Aleatório</h1>
            <p>
                <strong>Valor Minimo: {min}</strong>
            </p>
            <p>
                <strong>Valor Máximo: {max}</strong>
            </p>
            <p>
                <strong>Valor escolhido: {aleatorio}</strong>
            </p>
        </div>
    );
}
