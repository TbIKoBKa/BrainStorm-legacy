import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { BoxText } from './Text'

const Box = ({ number, style=null }) => {
    return (
        <TouchableHighlight style={[styles.box, style]}>
            <BoxText>{number}</BoxText>
        </TouchableHighlight>
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