import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Box from './Box'

const Body = ({ display, numbers }) => {
    let [boxSize, setBoxSize] = useState(0);

    useEffect(() => {
        let newBoxSize = Math.round((display.h - 150 - 30 - 30 - 100) / 3)
        while((display.w - newBoxSize * 3) < 40) {
            newBoxSize -= 1
        }
        setBoxSize(newBoxSize)
    }, [display.height])

    return (
        <View style={ styles.body }>
            {
                numbers.map((number, index) => (
                    <View key={index} style={ styles.boxContainer }>
                        <Box number={number} style={{ width: boxSize, height: boxSize }}></Box>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 30,
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    boxContainer: {
        width: '33%',
        alignItems: "center",
        justifyContent: "center",
    }
})

export default Body