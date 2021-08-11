import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

import Game from '../Game'
import AttentionHeader from './AttentionHeader'
import AttentionBody from './AttentionBody'
import AttentionFooter from './AttentionFooter'

import createBoxes from '../../../js/createBoxes'

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
        <Game>
            <AttentionHeader number={boxes.target} setPause={setPause} />
            <AttentionBody display={displaySize} numbers={boxes.boxes} onClickBox={onClickBox} />
            <AttentionFooter result={result} />
        </Game>
    )
}

export default Attention