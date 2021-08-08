import React, { useEffect, useRef } from 'react'
import { StyleSheet, TouchableHighlight, Animated } from 'react-native'
import MyText from '../Text'

const AnimatedTouchableHighlight = Animated.createAnimatedComponent(TouchableHighlight)

const Box = ({ number, style=null, onClickBox, animated }) => {
    const scale = useRef(new Animated.Value(0.3)).current
    
    useEffect(() => {
        Animated.timing(scale, {toValue: 1, duration: 150, useNativeDriver: false}).start()
    })

    const onClick = (number) => {
        if(animated) {
            onClickBox(number)
            scale.setValue(0.3)
        }
    }

    return (
        <AnimatedTouchableHighlight underlayColor="#1ac6ff" style={[styles.box, style, {transform: [{ scale: scale }]}]} touchSoundDisabled={true} onPress={() => {onClick(number)}}>
            <MyText style={{fontSize: 60}}>{number}</MyText>
        </AnimatedTouchableHighlight>
    )
}

const styles = StyleSheet.create({
    box: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00bfff',
        borderWidth: 8,
        borderColor: '#0099e6',
        borderRadius: 22,
        marginBottom: 10,
    }
})

export default Box