import React, { useState } from 'react'

import Game from '../Game'
import CapsBody from './CapsBody'
import CapsFooter from './CapsFooter'
import CapsHeader from './CapsHeader'

import randomInt from '../../../js/randomInt'

const correctCap = randomInt(2)

const Caps = ({ setPause }) => {
    const [isMixing, setIsMixing] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [result, setResult] = useState({ message: '', combo: 0 })

    const onClickCap = (number) => {
        if(number === correctCap)
            setResult((prevState) => ({ message: 'Hit', combo: prevState.combo + 1}))
        else
            setResult({ message: 'Loose', combo: 0 })
    }

    return (
        <Game>
            <CapsHeader
                isMixing={isMixing}
                isAnimating={isAnimating}
                setPause={setPause}
            />
            <CapsBody
                correctCap={correctCap}
                isMixing={isMixing}
                setIsMixing={setIsMixing}
                isAnimating={isAnimating}
                setIsAnimating={setIsAnimating}
                onClickCap={onClickCap}
            />
            <CapsFooter result={result}/>
        </Game>
    )
}

export default Caps