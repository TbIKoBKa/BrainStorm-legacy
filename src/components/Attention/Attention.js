import React, { useEffect, useState } from 'react';
import { StatusBar, View, Dimensions, StyleSheet } from 'react-native';
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import createBoxes from '../../js/createBoxes';

const window = Dimensions.get("window");

const Attention = ({ setPause }) => {
    let [displaySize, setDisplaySize] = useState({ h: window.height, w: window.width })
    let [boxes, setBoxes] = useState(createBoxes(9, 20))
    let [result, setResult] = useState({ message: '', combo: 0 })

    useEffect(() => {
        const subscription = Dimensions.addEventListener("change", ({ window }) => {
            setDisplaySize({ h: window.height, w: window.width })
        })
        return () => subscription?.remove()
    })

    const onClickBox = (number) => {
        if(number === boxes.target)
            setResult((prevState) => ({ message: 'Hit', combo: prevState.combo + 1}))
        else
            setResult({ message: 'Loose', combo: 0 })
        setBoxes(createBoxes(9, 20))
    }

    return (
        <View style={styles.attention}>
            <StatusBar hidden={true} />
            <Header number={boxes.target} setPause={setPause} />
            <Body display={displaySize} numbers={boxes.boxes} onClickBox={onClickBox} />
            <Footer result={result} />
        </View>
    )
}

const styles = StyleSheet.create({
    attention: {
        flex: 1,
        backgroundColor: '#4dd2ff'
    }
})

export default Attention