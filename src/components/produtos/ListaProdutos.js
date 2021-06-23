import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import Produtos from './Produtos'

function retornarLista(){
    return Produtos.map(p => {
        return <Text key={p.id}>{p.id} - {p.nome} tem R${p.preco}</Text>
    })
}

export default props => {
    return (
        <>
        <Text style={Estilo.txtG}>Lista de Produtos</Text>
        {retornarLista()}
        </>
    )
}