import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';

const Game = ({ children }) => {
    return (
        <View style={styles.game}>
            <StatusBar hidden={true} />
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    game: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#4dd2ff'
    }
})

export default Game