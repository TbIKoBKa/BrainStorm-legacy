import React, { useEffect, useState } from 'react'
import MyText from '../../Text'

import Header from '../Header'

const CapsHeader = ({ isMixing, isAnimating,  setPause }) => {
    const [message, setMessage] = useState('')

    useEffect(() => {
        if(!isMixing && !isAnimating)
            setMessage('Click to mix')
        else if(isMixing && isAnimating)
            setMessage('Wait')
        else if(isMixing && !isAnimating)
            setMessage('Choose')
    }, [isMixing, isAnimating])

    return (
        <Header setPause={setPause}>
            <MyText>{message}</MyText>
        </Header>
    )
}

export default CapsHeader