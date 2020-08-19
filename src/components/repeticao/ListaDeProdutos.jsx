import React from 'react';
import './ListaDeProdutos.css'
import produtos from '../../data/produtos'


export default props => {
    const listaProdutos = produtos.map((produto, i) => {
        return ( 
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.produto}</td>
                <td>R${produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>          
        )
    })

    return(
        <div className="ListaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>produto</th>
                        <th>preço</th>
                    </tr>
                </thead>
                <tbody>                   
                    {listaProdutos}
                </tbody>
            </table>
        </div>
    );
}