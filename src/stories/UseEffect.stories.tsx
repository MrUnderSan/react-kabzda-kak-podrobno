import React, {useEffect, useState} from 'react';

export default {
    title: 'TESTS/useEffect'
}

export const SimpleExample = () => {

    console.log('SimpleExample')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect every render')
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
    }, [counter])

    return <>
        <div>Hello, {counter}, {fake}</div>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>

    </>
}


export const Example1 = () => {

    console.log('Example1')

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect')

        document.title = counter.toString()
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementById
        // document.title = 'User'
    })

    return <>

        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>

    </>
}

export const Example2 = () => {

    console.log('Example2 with two state')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect')

        document.title = counter.toString()
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementById
        // document.title = 'User'
    }) // выполняется каждый раз

    return <>

        Hello, {counter}
        <button onClick={() => setFake(fake + 1)}>+</button>

    </>
}


export const Example3 = () => {

    console.log('Example3 with empty dependencies')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect')

        document.title = counter.toString()
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementById
        // document.title = 'User'
    }, []) // один раз при вмонтировании

    return <>

        Hello, {counter}
        <button onClick={() => setFake(fake + 1)}>+</button>

    </>
}

export const Example4 = () => {

    console.log('Example4 with dependencies')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect')

        document.title = counter.toString()
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementById
        // document.title = 'User'
    }, [counter]) // при изменении deps

    return <>

        Hello, {counter}
        <button onClick={() => setFake(fake + 1)}>+</button>

    </>
}