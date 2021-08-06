import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const MyText = ({ children }) => {
    return <Text style={styles.text}>{children}</Text>
}

export const BoxText = ({ children }) => {
    return <Text style={[ styles.text, styles.boxText ]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Georama-Medium',
        fontSize: 48,
        color: '#fff',
    },
    boxText: {
        fontSize: 60,
    }
})