import React from 'react'
import { StyleSheet, View } from 'react-native'
import PauseButton from '../Pause/PauseButton'

import menu from '../../img/menu.png'

const Header = ({ setPause, children }) => {
    return (
        <View style={styles.header}>
            { children }
            <PauseButton sourceIcon={menu} setPause={setPause} btnSize={{ width: 50, height: 50 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: "center",
        alignItems: "center",
        height: 150
    }
})

export default Header