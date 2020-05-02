import React from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

const blue = '#069cfb'
const white = '#fff'
const red = '#ff0000'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 5,
    },
    label: {
        width: '100%',
        height: 215,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,
    },
    displayText: {
        fontSize: 40,
    },
    eraseButton: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 15,
        paddingBottom: 15,
    },
    eraseIcon: {
        fontSize: 30,
        color: blue
    },
    buttons: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    button: {
        width: '25%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.2,
        borderColor: '#c2c2c2',
    },
    textButton: {
        fontSize: 22,
        color: 'gray'
    },
    operation: {
        color: blue
    },
    equalsButton: {
        backgroundColor: blue,
    },
    equalsIcon: {
        color: white,
    },
    clear: {
        color: red
    }
})