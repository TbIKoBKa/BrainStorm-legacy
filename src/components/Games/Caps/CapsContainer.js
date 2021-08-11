import React from 'react'
import { StyleSheet, View } from 'react-native'

import Cap from './Cap'

const CapsContainer = ({ caps, correctCap, translateY, onChooseCap, onPressBody }) => {
    return (
        <View style={styles.caps} >
            {
                caps.map((item, index) => 
                <Cap 
                    key={index}
                    index={index}
                    correct={ index === correctCap ? true : false }
                    pos={item}
                    translateY={translateY}
                    onChooseCap={onChooseCap}
                    onPressBody={onPressBody}
                />)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    caps: {
        flex: 1,
        flexDirection: "row"
    }
})

export default CapsContainer