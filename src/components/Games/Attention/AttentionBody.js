import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Body from '../Body'
import Box from './Box'

const AttentionBody = ({ display, numbers, onClickBox }) => {
    let [boxSize, setBoxSize] = useState(0);

    useEffect(() => {
        let newBoxSize = Math.round((display.h - 150 - 30 - 30 - 100) / 3)
        while((display.w - newBoxSize * 3) < 40) {
            newBoxSize -= 1
        }
        setBoxSize(newBoxSize)
    }, [display.height])

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