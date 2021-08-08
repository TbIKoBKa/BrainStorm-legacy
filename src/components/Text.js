import React from 'react'
import { StyleSheet, Text } from 'react-native'

const MyText = ({ children, style=null }) => {
    return <Text style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Georama-Medium',
        fontSize: 48,
        color: '#fff',
    }
})

export default MyText