import React from 'react'
import { StyleSheet, View } from 'react-native'
import Box from './Box'

const Header = ({ number }) => {
    return (
        <View style={styles.header}>
            <Box number={number} style={styles.headerBox}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: "center",
        alignItems: "center",
        height: 150
    },
    headerBox: {
        backgroundColor: '#ffcc00',
        borderColor: '#cca300',
        height: 130,
        width: 130
    }
})

export default Header