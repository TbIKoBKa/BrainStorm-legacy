import React from 'react'
import { StyleSheet } from 'react-native'

import Footer from '../Footer'

const AttentionFooter = ({ result }) => {
    return (
        <Footer result={result} />
    )
}

const styles = StyleSheet.create({
    text: {
        textShadowColor: '#000',
        textShadowRadius: 10
    }
})

export default AttentionFooter