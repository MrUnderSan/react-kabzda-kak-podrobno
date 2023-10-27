import React, {FC} from 'react';
import {ClockType} from './Clock';
import styles from './AnalogClock.module.css'

export const AnalogClock: FC<ClockType> = ({date}) => {

    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const hr_rotation = 30 * hr + min / 2; //converting current time
    const min_rotation = 6 * min;
    const sec_rotation = 6 * sec;

    return (
        <div className={styles.clockContainer}>
            <div className={styles.hour} style={{'transform': `rotate(${hr_rotation}deg)`}}></div>
            <div className={styles.minute} style={{'transform': `rotate(${min_rotation}deg)`}}></div>
            <div className={styles.second} style={{'transform': `rotate(${sec_rotation}deg)`}}></div>
        </div>
    )
}