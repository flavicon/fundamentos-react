import React from 'react';
import produtos from '../../data/produtos'

export default props => {
    const listaProdutos = produtos.map((produto) => {
        return ( 
            <tbody key={produto.id}>
                <tr>
                    <td>{produto.id}</td>
                    <td>{produto.produto}</td>
                    <td>R${produto.preco}</td>
                </tr>          
            </tbody>
        )
    })

    return(
        <div>
            <table border={1} width="100%">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>produto</td>
                        <td>preço</td>
                    </tr>
                </thead>
                {listaProdutos}
            </table>
        </div>
    );
}