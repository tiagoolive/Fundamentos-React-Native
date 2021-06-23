import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor="#d11141" />
            <Quadrado cor="#00b159" />
            <Quadrado cor="#ffc425" />
            <Quadrado cor="#00aedb" />
            <Quadrado cor="#f37735" />
            <Quadrado cor="#d2d4dc" />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        backgroundColor: '#000'
    }
})