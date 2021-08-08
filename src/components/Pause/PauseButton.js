import React from 'react'
import { Image, StyleSheet, TouchableHighlight } from 'react-native'

const PauseButton = ({ sourceIcon, btnSize=null, setPause }) => {
    return (
        <TouchableHighlight underlayColor="transparent" style={[styles.button]} onPress={() => {setPause((prevState) => !prevState)}}>
            <Image source={sourceIcon} resizeMode='stretch' style={btnSize} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        end: 10,
        top: 10
    },
})

export default PauseButton