import React from 'react'
import { StatusBar, StyleSheet, TouchableHighlight, View } from 'react-native'
import MyText from '../Text'

import AnimatedLogo from './AnimatedLogo'

const MainMenu = ({ setGame }) => {
    return (
        <View style={styles.main_menu}>
            <StatusBar hidden={true} />
            <View>
                <MyText style={styles.header}>BrainStorm</MyText>
            </View>
            <AnimatedLogo />
            <View style={styles.controls}>
                <TouchableHighlight underlayColor="#00aaff" style={styles.button} onPress={() => {setGame(0)}}>
                    <MyText>Play</MyText>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_menu: {
        flex: 1,
        width: '100%',
        backgroundColor: '#4dc3ff',
        alignItems: "center"
    },
    header: {
        fontSize: 64,
        textShadowColor: '#000',
        textShadowRadius: 20,
        flexBasis: 100
    },
    controls: {
        marginTop: 40
    },
    button: {
        paddingHorizontal: 80,
        paddingVertical: 5,
        borderColor: '#00aaff',
        borderWidth: 3,
        borderRadius: 36,
    }
})

export default MainMenu