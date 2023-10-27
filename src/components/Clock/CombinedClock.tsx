import React, {FC} from 'react';
import {ClockType} from './Clock';
import {AnalogClock} from './AnalogClock';
import {DigitalClock} from './DigitalClock';
import styles from './CombinedClock.module.css'

export const CombinedClock: FC<ClockType> = ({date}) => (
    <div className={styles.combinedClock}>
        <AnalogClock date={date}/>
        <DigitalClock date={date}/>
    </div>
)
