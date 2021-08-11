import React, { useState } from 'react'
import { StatusBar, StyleSheet, TouchableHighlight, View } from 'react-native'
import MyText from '../Text'

import AnimatedLogo from './AnimatedLogo'

const MainMenu = ({ setGame }) => {
    const [gamesListVisible, setGamesListVisible] = useState(false)

    const onGameSelect = (game) => {
        setGame(game),
        setGamesListVisible(false)
    }

    return (
        <View style={styles.main_menu}>
            <StatusBar hidden={true} />
            <View>
                <MyText style={styles.header}>BrainStorm</MyText>
            </View>
            <AnimatedLogo />
            <View style={styles.controls}>
                {
                    gamesListVisible ?
                    <>
                        <TouchableHighlight underlayColor="#00aaff" style={styles.button} onPress={() => {onGameSelect(0)}}>
                            <MyText>Attention</MyText>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="#00aaff" style={styles.button} onPress={() => {onGameSelect(1)}}>
                            <MyText>Caps</MyText>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="#ff1a1a" style={[styles.button, styles.redButton]} onPress={() => {setGamesListVisible(false)}}>
                            <MyText>Back</MyText>
                        </TouchableHighlight>
                    </> :
                    <>
                        <TouchableHighlight underlayColor="#00aaff" style={styles.button} onPress={() => {setGamesListVisible(true)}}>
                            <MyText>Play</MyText>
                        </TouchableHighlight>
                    </>
                }
                
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
        alignItems: "center",
        paddingHorizontal: 40,
        paddingVertical: 5,
        marginBottom: 10,
        borderColor: '#00aaff',
        borderWidth: 3,
        borderRadius: 36,
    },
    redButton: {
        borderWidth: 0,
        backgroundColor: "#ff1a1a"
    }
})

export default MainMenu