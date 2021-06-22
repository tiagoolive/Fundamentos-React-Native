import React from 'react'
import Filho from './Filho'

export default props => {
    x = 13
    y = 100
    return (
        <>
        <Filho a={x} b={y}></Filho>
        <Filho a={x + 100} b={y + 200}></Filho>
        </>
    )
}