import React, { useEffect, useState } from 'react';
import { StatusBar, View, Dimensions } from 'react-native';
import Header from './src/components/Header';
import Body from './src/components/Body'
import Footer from './src/components/Footer'

const window = Dimensions.get("window");

const App = () => {
    const [displaySize, setDisplaySize] = useState({ h: window.height, w: window.width })

    useEffect(() => {
        const subscription = Dimensions.addEventListener("change", ({ window }) => {
            setDisplaySize({ h: window.height, w: window.width })
        })
        return () => subscription?.remove()
    })

    return (
        <View style={{ height: '100%', backgroundColor: '#ffcc66' }}>
            <StatusBar hidden={true}></StatusBar>
            <Header number={1}></Header>
            <Body display={displaySize} numbers={[1,2,3,4,5,6,7,8,9]}></Body>
            <Footer result={'Hit'}></Footer>
        </View>
    )
}

export default App