import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, TouchableHighlight, View } from 'react-native'
import MyText from '../Text'
import PauseButton from './PauseButton'

import cross from '../../img/cross.png'

const Pause = ({ setPause, setGame }) => {
    const opacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(opacity, { toValue: 1, duration: 50, useNativeDriver: true }).start()
    }, [])

    const onPressExit = () => {
        setPause(false),
        setGame(null)
    }

    return (
        <>
            <Animated.View style={[styles.centered, { opacity: opacity }]}>
                <View style={styles.background} ></View>
                <View style={styles.modal}>
                    <View style={styles.modalHeader}>
                        <MyText>Pause</MyText>
                        <PauseButton sourceIcon={cross} setPause={setPause} btnSize={{ width: 30, height: 30 }} />
                    </View>
                    <View>
                        <TouchableHighlight underlayColor="#00aaff" style={styles.button} onPress={onPressExit}>
                            <MyText style={styles.buttonText}>Exit</MyText>
                        </TouchableHighlight>
                    </View>
                </View>
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        width: '100%',
        height: '100%'
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: "absolute",
        backgroundColor: '#000',
        opacity: 0.5,
    },
    modal: {
        justifyContent: "center",
        alignItems: "center",
        width: '80%',
        borderRadius: 36,
        borderWidth: 8,
        borderColor: '#00aaff',
        padding: 10,
        backgroundColor: '#4dc3ff'
    },
    modalHeader: {
        width: '100%',
        alignItems: "center"
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderColor: '#00aaff',
        borderWidth: 3,
        borderRadius: 36,
    },
    buttonText: {
        fontSize: 30
    }
})

export default Pause