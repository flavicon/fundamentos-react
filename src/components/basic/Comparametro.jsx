import React from 'react'

export default function ComParametro(props) {

    const nota = Math.ceil(props.nota)

    const status = nota ? 'Aprovado' : 'Reprovado';

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong>
                tem nota
                <strong> {nota} </strong>
                e está
                <strong> {status}</strong>
            </p>
        </div>
    )

}