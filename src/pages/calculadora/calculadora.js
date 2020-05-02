import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { 
    FontAwesome5,
    Octicons,      
    MaterialCommunityIcons,
    Entypo
} from '@expo/vector-icons'
import styles from './calculadora-style'

export default function Calculadora() {
    const [display, setDisplay] = useState(String())
    const [expression, setExpression] = useState(String())
    const [showingResult, setShowingResult] = useState(false)

    function clearDisplay() {
        setDisplay(String())
    }

    function addToDisplay(arg) {
        if(showingResult) {
            setShowingResult(false)
            setDisplay(arg)
        } else {
            setDisplay(display + arg)
        }
    }

    function erase() {
        const lengthDisplay = display.length
        const eraseDisplay = display.slice(0, lengthDisplay - 1)

        setDisplay(eraseDisplay)
    }

    function resolve() {
        setShowingResult(true)
        setExpression(String())

        try {
            setDisplay(eval(expression))
        } catch(error) {
            setDisplay('Operação Inválida')
        }
    }

    useEffect(() => {
        if(display !== undefined) {
            setExpression(display
                .toString()
                .replace('×', '*')
                .toString()
                .replace('÷', '/'))
        }
    }, [display])

    return (
        <View style={styles.container}>
            <View style={styles.label}>
                <Text style={styles.displayText}>{display}</Text>
            </View>
            <TouchableOpacity style={styles.eraseButton} onPress={erase}>
                <Entypo style={styles.eraseIcon} name="erase"/>
            </TouchableOpacity>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={clearDisplay}>
                    <Text style={[styles.textButton, styles.clear]}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('(')}>
                    <Text style={[styles.textButton, styles.operation]}>(</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay(')')}>
                    <Text style={[styles.textButton, styles.operation]}>)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('÷')} >
                    <FontAwesome5 style={[styles.icon, styles.textButton, styles.operation]} name="divide" /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('7')}>
                    <Text style={styles.textButton}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('8')}>
                    <Text style={styles.textButton}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('9')}>
                    <Text style={styles.textButton}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('×')}>
                    <Octicons style={[styles.icon, styles.textButton, styles.operation]} name="x"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('4')}>
                    <Text style={styles.textButton}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('5')}>
                    <Text style={styles.textButton}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('6')}>
                    <Text style={styles.textButton}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('-')}>
                    <FontAwesome5 style={[styles.icon, styles.textButton, styles.operation]} name="minus"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('1')}>
                    <Text style={styles.textButton}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('2')}>
                    <Text style={styles.textButton}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('3')}>
                    <Text style={styles.textButton}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('+')}>
                    <FontAwesome5 style={[styles.icon, styles.textButton, styles.operation]} name="plus"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIcons style={[styles.icon, styles.textButton]} name="plus-minus"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('0')}>
                    <Text style={styles.textButton}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => addToDisplay('.')}>
                    <Text style={styles.textButton}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.equalsButton]} onPress={resolve}>
                    <FontAwesome5 style={[styles.icon, styles.textButton, styles.equalsIcon]} name="equals"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}