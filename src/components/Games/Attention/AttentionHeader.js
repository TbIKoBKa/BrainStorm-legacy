import React from 'react'
import { StyleSheet } from 'react-native'
import Header from '../Header'
import Box from './Box'

const AttentionHeader = ({ number, setPause }) => {
    return (
        <Header setPause={setPause}>
            <Box number={number} style={styles.headerBox}/>
        </Header>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: '#00ace6',
        borderColor: '#0086b3',
        height: 130,
        width: 130
    }
})

export default AttentionHeader