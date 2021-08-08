import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Animated, Easing } from 'react-native'
import leftBrain from '../../img/leftBrain.png'
import rightBrain from '../../img/rightBrain.png'
import gear from '../../img/gear.png'

const AnimatedLogo = () => {
    const posLeftBrain = useRef(new Animated.Value(0)).current
    const posRightBrain = useRef(new Animated.Value(0)).current
    const rotateGear = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.parallel([
                        Animated.timing(posLeftBrain, { toValue: -30, duration: 1000, useNativeDriver: true }),
                        Animated.timing(posRightBrain, { toValue: 30, duration: 1000, useNativeDriver: true })
                    ]),
                    Animated.parallel([
                        Animated.timing(posLeftBrain, { toValue: 0, duration: 1000, useNativeDriver: true }),
                        Animated.timing(posRightBrain, { toValue: 0, duration: 1000, useNativeDriver: true })
                    ])
                ]),
            ])
        ).start()

        Animated.loop(
            Animated.sequence([
                Animated.timing(rotateGear, { toValue: 1, duration: 1000, useNativeDriver: true, easing: Easing.linear }),
                Animated.timing(rotateGear, { toValue: 0, duration: 0, useNativeDriver: true, easing: Easing.linear }),
            ])
        ).start()
    }, [])

    const rotateDegGear = rotateGear.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <View style={styles.logoContainer}>
            <Animated.Image source={leftBrain} style={[styles.logo_brain, { transform: [{ translateX: posLeftBrain }] }]} />
            <Animated.Image source={rightBrain} style={[styles.logo_brain, { marginStart: 10, transform: [{ translateX: posRightBrain }]}]} />
            <Animated.Image source={gear} style={[styles.gear, {transform: [{rotate: rotateDegGear}]}]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    logo_brain: {
        height: 180,
        width: 100,
        zIndex: 100
    },
    gear: {
        height: 80,
        width: 80,
        position: 'absolute',
        top: 50
    }
})

export default AnimatedLogo