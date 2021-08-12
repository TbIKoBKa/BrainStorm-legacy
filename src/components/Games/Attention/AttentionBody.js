import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Body from '../Body'
import Box from './Box'

const calculateBoxSize = (displaySize) => {
    let newBoxSize = Math.round((displaySize.h - 150 - 30 - 30 - 100) / 3)
    while((displaySize.w - newBoxSize * 3) < 40) {
        newBoxSize -= 1
    }
    return newBoxSize
}

const AttentionBody = ({ display, numbers, onClickBox }) => {
    let boxSize = calculateBoxSize(display);

    return (
        <Body>
            {
                numbers.map((number, index) => (
                    <View key={index} style={ styles.boxContainer }>
                        <Box number={number} style={{ width: boxSize, height: boxSize }} onClickBox={onClickBox} animated={true}></Box>
                    </View>
                ))
            }
        </Body>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        width: '33%',
        alignItems: "center",
        justifyContent: "center",
    }
})

export default AttentionBody