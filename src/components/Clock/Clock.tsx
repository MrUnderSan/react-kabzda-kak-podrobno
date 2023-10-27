import React, {FC, JSX, useEffect, useState} from 'react'
import {DigitalClock} from './DigitalClock';
import {AnalogClock} from './AnalogClock';
import {CombinedClock} from './CombinedClock';

export type ClockType = {
    date: Date
}

type ModeType = 'analog' | 'digital' | 'combined'

type PropsType = {
    mode?: ModeType
}

export const Clock: FC<PropsType> = ({mode = 'digital'}) => {

    const [date, setDate] = useState(new Date())
    const [clockMode, setClockMode] = useState<ModeType>('digital')

    useEffect(() => {
        setClockMode(mode)
    }, [mode]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view: JSX.Element

    switch (clockMode) {
        case 'analog':
            view = <AnalogClock date={date}/>
            break
        case 'combined':
            view = <CombinedClock date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClock date={date}/>
    }

    return view
}


