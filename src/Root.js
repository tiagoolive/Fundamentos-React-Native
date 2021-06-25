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
// import ContadorV2 from './components/contador/ContadorV2'
// import Diferenciar from './components/Diferenciar'
// import ParImpar from './components/ParImpar'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import UsuarioLogado from './components/UsuarioLogado'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import FlexBoxV1 from './components/layout/FlexBoxV1'
//import FlexBoxV2 from './components/layout/FlexBoxV2'
// import FlexBoxV3 from './components/layout/FlexBoxV3'
// import FlexBoxV4 from './components/layout/FlexBoxV4'
import Mega from './components/mega/Mega'

export default () => {
  return (
    <SafeAreaView style={style.App }>
      <Mega qtdeNumeros={7}/>
      {/*
      <FlexBoxV4 />
      <FlexBoxV3 />
      <FlexBoxV2 />
      <FlexBoxV1 />
      <DigiteSeuNome></DigiteSeuNome>
      <ListaProdutosV2></ListaProdutosV2>
      <ListaProdutos></ListaProdutos>
        <UsuarioLogado usuario={{nome:"Guilherme", email:"Gui@gmail.com"}}></UsuarioLogado>
        <UsuarioLogado usuario={{nome:"Ana"}}></UsuarioLogado>
        <UsuarioLogado usuario={{email:"Jorge@empresa.com"}}></UsuarioLogado>
      <Familia>
        <Membro nome="Ricardo" sobrenome="Milos" />
        <Membro nome="Vanessa" sobrenome="Milos" />
      </Familia>
      <Familia>
        <Membro nome="Ana" sobrenome="Silva" />
        <Membro nome="Pedro" sobrenome="Silva" />
      </Familia>
      <ParImpar num={3}></ParImpar>
      <Diferenciar></Diferenciar>
      <ContadorV2></ContadorV2>
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

