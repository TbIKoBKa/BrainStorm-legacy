import React, { useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, TouchableHighlight, View } from 'react-native'

import Body from '../Body'
import CapsContainer from './CapsContainer'

import randomInt from '../../../js/randomInt'

const CapsBody = ({ correctCap, isMixing, setIsMixing, isAnimating, setIsAnimating, onClickCap }) => {
    const [caps, setCaps] = useState([0, 1, 2])

    const translateY = useRef(new Animated.Value(100)).current

    const animationY = (dirrection='down') => {
        translateY.setValue(dirrection === 'down' ? -100 : 0)
        return Animated.timing(translateY, { toValue: dirrection === 'down' ? 0 : -100, useNativeDriver: true })
    }

    const getMixiesCaps = (nMix) => {
        let newMixies = [caps]

        for(let i = 1; i < nMix; i++) {
            let cap1 = randomInt(2), cap2 = randomInt(2)

            while(cap1 === cap2)
                cap2 = randomInt(2)

            let newMix = [...newMixies[i - 1]]
            
            let prevPosCap1 = newMix[cap1]
            
            newMix[cap1] = newMix[cap2]
            newMix[cap2] = prevPosCap1

            newMixies = [...newMixies, newMix]
        }

        return newMixies
    }

    const mixCaps = (nMix) => {
        let mixies = getMixiesCaps(nMix)
        let i = 0;
        let timer = setInterval(() => {
            if(i === nMix - 1) {
                setIsAnimating(false)
                clearInterval(timer)
            }
            setCaps(mixies[i])
            i++
        }, 300)
    }

    const onChooseCap = (number) => {
        if(isMixing && !isAnimating) {
            setIsMixing(false)
            onClickCap(number)
            animationY('up').start()
        }
    }

    const onPressBody = () => {
        if(!isMixing && !isAnimating) {
            setIsMixing(true)
            setIsAnimating(true)
            animationY('down').start()
            mixCaps(30)
        }
    }

    useEffect(() => {
        translateY.setValue(-100)
    }, [])

    return (
        <Body>
            <TouchableHighlight style={styles.container} underlayColor="transparent" onPress={!isAnimating ? onPressBody : null}>
                <CapsContainer
                    caps={caps}
                    correctCap={correctCap}
                    translateY={translateY}
                    onChooseCap={onChooseCap}
                    onPressBody={onPressBody}
                />
            </TouchableHighlight>
        </Body>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: "center"
    }
})

export default CapsBody