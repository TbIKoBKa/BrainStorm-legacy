import React, { useState } from 'react'
import MainMenu from './src/components/MainMenu/MainMenu'
import Attention from './src/components/Games/Attention/Attention'
import Pause from './src/components/Pause/Pause'
import { StatusBar } from 'react-native'
import Caps from './src/components/Games/Caps/Caps'

const App = () => {
    const [game, setGame] = useState(null)
    const [pause, setPause] = useState(false)
    return (
        <>
            <StatusBar hidden={true} />
            {
                game === null ? <MainMenu setGame={setGame}/> :
                game === 0 ? <Attention setPause={setPause} /> :
                game === 1 ? <Caps setPause={setPause}></Caps> :
                null
            }
            { pause ? <Pause setPause={setPause} setGame={setGame}/> : null }
        </>
    )
}

export default App