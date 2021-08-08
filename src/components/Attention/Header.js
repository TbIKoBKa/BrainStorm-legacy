import React from 'react'
import { StyleSheet, View } from 'react-native'
import Box from './Box'
import PauseButton from '../Pause/PauseButton'

import menu from '../../img/menu.png'

const Header = ({ number, setPause }) => {
    return (
        <View style={styles.header}>
            <Box number={number} style={styles.headerBox}/>
            <PauseButton sourceIcon={menu} setPause={setPause} btnSize={{ width: 50, height: 50 }} />
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
        backgroundColor: '#00ace6',
        borderColor: '#0086b3',
        height: 130,
        width: 130
    }
})

export default Header