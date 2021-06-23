import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado cor="#d11141" lado={20} />
            <Quadrado cor="#00b159" lado={30} />
            <Quadrado cor="#ffc425" lado={40} />
            <Quadrado cor="#00aedb" lado={50} />
            <Quadrado cor="#f37735" lado={60} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})