import React, { useEffect, useRef } from 'react'
import { StyleSheet, TouchableHighlight, Animated } from 'react-native'
import { BoxText } from './Text'

const AnimatedTouchableHighlight = Animated.createAnimatedComponent(TouchableHighlight)

const Box = ({ number, style=null, onClickBox=() => {} }) => {
    const scale = useRef(new Animated.Value(0.3)).current
    
    useEffect(() => {
        Animated.timing(scale, {toValue: 1, duration: 150, useNativeDriver: false}).start()
    })

    const onClick = (number) => {
        onClickBox(number)
        scale.setValue(0.3)
    }

    return (
        <AnimatedTouchableHighlight underlayColor="#ffcc00" style={[styles.box, style, {transform: [{ scale: scale }]}]} onPress={() => {onClick(number)}}>
            <BoxText>{number}</BoxText>
        </AnimatedTouchableHighlight>
    )
}

const styles = StyleSheet.create({
    box: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#e6b800',
        borderWidth: 8,
        borderColor: '#ff8000',
        borderRadius: 22,
        marginBottom: 10,
    }
})

export default Box