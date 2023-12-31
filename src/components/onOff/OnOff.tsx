import './OnOff.css'
import React from 'react';

type PropsType = {
    onOff: boolean
    setOnOff: (s: boolean) => void
}

export const OnOff: React.FC<PropsType> = ({onOff, setOnOff}) => {

    const onStyle = {
        backgroundColor: `${onOff ? 'green' : 'white'}`
    }

    const offStyle = {
        backgroundColor: `${!onOff ? 'red' : 'white'}`
    }

    const onOnClickHandler = () => {
        setOnOff(true)
    }

    const onOffClickHandler = () => {
        setOnOff(false)
    }

    return (
        <div className={'on-off'}>
            <div className={'switch'}
                 style={onStyle}
                 onClick={onOnClickHandler}
            >on
            </div>
            <div className={'switch'}
                 style={offStyle}
                 onClick={onOffClickHandler}
            >off
            </div>
            <div className={'bulb'} style={onStyle}></div>
        </div>
    )
}
