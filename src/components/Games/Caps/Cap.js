import React, { useEffect, useRef } from 'react'
import { StyleSheet, Animated, Image, TouchableHighlight, View } from 'react-native'

import cap from '../../../img/cap.png'
import brain from '../../../img/brain__pink.png'

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableHighlight)

const Cap = ({ correct, index, pos, translateY, onChooseCap, onPressBody }) => {
    const posX = useRef(new Animated.Value(0)).current
    useEffect(() => {
        posX.setValue(-50)
    }, [])

    useEffect(() => {
        Animated.timing(posX, {
            toValue: 
                pos === 0 ? -170 :
                pos === 1 ? -50 :
                70,
            duration: 250,
            useNativeDriver: true
        }).start()
    })

    const onPressCap = (index) => {
        onPressBody()
        onChooseCap(index)
    }

    return (
        <AnimatedTouchable activeOpacity={1} underlayColor="transparent" style={[styles.capContainer, { transform: [{ translateX: posX }] }]} onPress={() => onPressCap(index)}>
            <View style={styles.cap}>
                <Animated.Image source={cap} style={[styles.capImage, {transform: [{ translateY: translateY }]}]} />
                { correct ? <Image source={brain} style={styles.brain} ></Image> : null }
            </View>
        </AnimatedTouchable>
    )
}

const styles = StyleSheet.create({
    capContainer: {
        width: 100,
        height: '100%',
        position: "absolute",
        left: '50%'
    },
    cap: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    capImage: {
        width: "100%",
        resizeMode: 'center',
        zIndex: 100
    },
    brain: {
        width: "50%",
        resizeMode: 'center',
        position: "absolute",
        bottom: 100
    }
})

export default Cap