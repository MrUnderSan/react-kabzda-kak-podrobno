import React from 'react';
import {Clock} from './Clock';

export default {
    title: 'TESTS/Clock'
}

export const BaseExample = () => {
    return <time>
        <Clock />
    </time>
}

export const DigitalExample = () => {
    return <time>
        <Clock mode={'digital'} />
    </time>
}

export const AnalogExample = () => {
    return <time>
        <Clock mode={'analog'} />
    </time>
}