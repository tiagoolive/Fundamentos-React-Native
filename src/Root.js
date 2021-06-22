import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

// import Primeiro from './components/Primeiro'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
// import Pai from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'


export default () => {
  return (
    <SafeAreaView style={style.App }>
      <ContadorV2></ContadorV2>
      {/*
      <Pai></Pai>
      <Pai></Pai>
      <Contador inicial={10} passo={15} />
      <Contador />
      <Botao />
      <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro"></Titulo>
      <Aleatorio min={1} max={10}></Aleatorio>
      <Aleatorio min={1} max={100}></Aleatorio>
      <MinMax min={4} max={30}></MinMax>
      <MinMax min={1} max={98}></MinMax> 
      <CompPadrao></CompPadrao>
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Primeiro></Primeiro> */}
    </SafeAreaView>
    
  )
}

const style = StyleSheet.create({
  App : {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})

