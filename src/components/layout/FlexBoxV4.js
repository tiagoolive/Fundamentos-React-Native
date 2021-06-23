import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0} />
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0: {
        backgroundColor: '#f37735',
        height: 300
    },
    V1: {
        backgroundColor: '#d11141',
        flexGrow: 3
    },
    V2: {
        backgroundColor: '#ffc425',
        flexGrow: 1
    }
})