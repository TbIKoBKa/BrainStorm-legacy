import React, { useState } from 'react'
import MainMenu from './src/components/MainMenu/MainMenu'
import Attention from './src/components/Attention/Attention'
import Pause from './src/components/Pause/Pause'
import { StatusBar } from 'react-native'

const App = () => {
    const [game, setGame] = useState(null)
    const [pause, setPause] = useState(false)
    return (
        <>
            <StatusBar hidden={true} />
            { game === null ? <MainMenu setGame={setGame}/> : <Attention setPause={setPause} /> }
            { pause ? <Pause setPause={setPause} setGame={setGame}/> : null }
        </>
    )
}

export default App