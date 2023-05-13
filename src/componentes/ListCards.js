import React from "react";
import produtos from '../data/produtos.json'
import Card from './Card'

export default function ListCards(props) {

    return produtos.map(produto =>
        <Card key={produto.id} titulo={produto.nome}>
            <h3>{'R$ '+produto.preco.toLocaleString('pt-br',{minimumFractionDigits:2})}</h3>
        </Card>
    )
   

    
}