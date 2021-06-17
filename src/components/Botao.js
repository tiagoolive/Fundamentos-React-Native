import React from 'react'
import { Button } from 'react-native'


export default props => {

    function executar(){
        console.warn("Exec #1!!!")
    }

    return(
        <>
            <Button title="Excutar!" onPress={executar} />
            <Button title="Excutar!" onPress={function() {console.warn("Exec #2!!!")}} />
            <Button title="Excutar!" onPress={() => console.warn("Exec #3!!!")} />
        </>
    )
}