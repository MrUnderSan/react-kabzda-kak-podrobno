import React, {FC, useEffect, useState} from 'react'
import './Clock.css'

type PropsType = {
    mode?: 'analog' | 'digital'
}

export const Clock: FC<PropsType> = ({mode = 'digital'}) => {

    const [date, setDate] = useState(new Date())
    const [clockMode, setClockMode] = useState<'analog' | 'digital'>('digital')

    useEffect(() => {
        setClockMode(mode)
    }, [mode]);

    return (
        clockMode === 'digital'
            ? <DigitalClock date={date} setDate={setDate}/>
            : <AnalogClock date={date} setDate={setDate}/>
    )
}


type ClockType = {
    date: Date
    setDate: (date: Date) => void
}
const DigitalClock = ({date, setDate}: ClockType) => {

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [setDate])

    const get2digitsString = (num: number) => num < 10 ? '0' + num : num

    return (
        <div>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
    )
}

const AnalogClock = ({date, setDate}: ClockType) => {

    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const hr_rotation = 30 * hr + min / 2; //converting current time
    const min_rotation = 6 * min;
    const sec_rotation = 6 * sec;

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())

            return () => {
                clearInterval(interval)
            }
        }, 1000);
    }, [setDate]);



    return (
        <div className="clockContainer">
            <div className="hour" style={{'transform': `rotate(${hr_rotation}deg)`}}></div>
            <div className="minute" style={{'transform': `rotate(${min_rotation}deg)`}}></div>
            <div className="second" style={{'transform': `rotate(${sec_rotation}deg)`}}></div>
        </div>
    )
}