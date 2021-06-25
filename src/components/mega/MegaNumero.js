import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default ({num}) => {
    return (
        <View style={style.container}>
            <Text style={[Estilo.txtG, style.num]}>
                {num}
            </Text>
        </View>       
    )
}

const style = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25
    },
    num: {
        color: '#FFF'
    }
})