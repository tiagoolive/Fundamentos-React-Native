import React from 'react'
import { SafeAreaView } from 'react-native'

import Primeiro from './components/Primeiro'
import CompPadrao, { Comp1, Comp2 } from './components/Multi'

export default () => {
  return (
    <SafeAreaView>
      <CompPadrao></CompPadrao>
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Primeiro></Primeiro>
    </SafeAreaView>
    
  )
}

