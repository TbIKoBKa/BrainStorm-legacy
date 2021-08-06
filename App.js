import React, { useEffect, useState } from 'react';
import { StatusBar, View, Dimensions } from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body'
import Footer from './src/components/Footer'

import createBoxes from './src/js/createBoxes';

const window = Dimensions.get("window");

const App = () => {
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
        <View style={{ height: '100%', backgroundColor: '#ffcc66' }}>
            <StatusBar hidden={true}></StatusBar>
            <Header number={boxes.target}></Header>
            <Body display={displaySize} numbers={boxes.boxes} onClickBox={onClickBox}></Body>
            <Footer result={result}></Footer>
        </View>
    )
}

export default App