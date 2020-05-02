import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Calculadora from './pages/calculadora/calculadora'
import Notepad from './pages/notepad/notepad' 

export default createDrawerNavigator({
    calculadora: {
        screen: Calculadora,
        navigationOptions: { title: 'Calculadora' }
    },

    notepad: {
        screen: Notepad,
        navigationOptions: { title: 'Notepad'}
    }
}, { drawerWidth: 300, drawerPosition: 'left' })