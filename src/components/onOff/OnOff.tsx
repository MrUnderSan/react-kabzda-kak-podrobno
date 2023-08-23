import './onOff.css'
import {useState} from 'react';

export const OnOff = () => {

    const [onOff, setOnOff] = useState(false)

    const onStyle = {
        backgroundColor: `${onOff ? 'green' : 'white'}`
    }

    const offStyle = {
        backgroundColor: `${!onOff ? 'red' : 'white'}`
    }

    const bulbStyle = {
        backgroundColor: `${onOff ? 'green' : 'red'}`
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
            <div className={'bulb'} style={bulbStyle}></div>
        </div>
    )
}