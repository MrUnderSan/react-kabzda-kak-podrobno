import React, {useMemo, useState} from 'react';

export default {
    title: 'TESTS/useState'
}

const generateData = () => {
    // difficult counting
    console.log('generateData')
    return 1
}

export const Example1 = () => {

    console.log('Example1 UseState with useMemo')

    const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(initValue)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}
export const Example2 = () => {

    console.log('Example2 UseState with callback')

    const [counter, setCounter] = useState(generateData)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}
export const Example3 = () => {

    console.log('Example3 UseState with function in setCounter')

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        console.log(`changer: ${state}`)
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}
export const Example4 = () => {

    console.log('Example4 UseState with function inside setCounter')

    const [counter, setCounter] = useState(generateData)

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}