import React, {FC} from 'react';
import {ClockType} from './Clock';

export const DigitalClock: FC<ClockType> = ({date}) => {

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