import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    let {min, max} = props
    const num = parseInt((Math.random() * max - min) + min)
    return(
        <Text style={Estilo.txtG}>O valor aleatório é {num}</Text>
    )
}