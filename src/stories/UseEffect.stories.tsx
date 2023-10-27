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

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('Component rendered: ' + counter)

    useEffect(() => {
        console.log('Effect occurred: ' + counter)

        return () => {
            console.log('RESET EFFECT: ' + counter)
        }
    }, [counter])

    const increase = () => setCounter(counter + 1)

    return <>
        <div>Hello, {counter}</div>
        <button onClick={increase}>counter+</button>
    </>
}
export const KeyTrackerExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered with text: ' + text)

    useEffect(() => {

        const keypressHandler = (e: KeyboardEvent)=> {
            console.log(e.key)
            setText(sate => sate + e.key)
        }

        window.document.addEventListener('keypress', keypressHandler)

        return () => {
            console.log('RESET EFFECT')
            window.document.removeEventListener('keypress', keypressHandler)
        }
    }, [])

    return <>
        Typed text: {text}
    </>
}

export const KeyTrackerWithDepsExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered with text: ' + text)

    useEffect(() => {

        const keypressHandler = (e: KeyboardEvent)=> {
            console.log(e.key)
            setText(text + e.key)
        }

        window.document.addEventListener('keypress', keypressHandler)

        return () => {
            console.log('RESET EFFECT')
            window.document.removeEventListener('keypress', keypressHandler)
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {

    console.log('SetTimeoutExample')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    // setTimeout(() => {
    //     console.log('setTimeout')
    //     document.title = counter.toString()
    // }, 1000)

    useEffect(() => {
        console.log('useEffect')

        const timeoutId = setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [counter])

    return <>
        <div>Hello, {counter}, {fake}</div>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>

    </>
}


export const SetIntervalExample = () => {

    console.log('SetIntervalExample')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect')

        const intervalId =setInterval(() => {
            console.log('setInterval: ' + counter)
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        <div>Hello, counter: {counter}, fake: {fake}</div>
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}

    </>
}


export const ClockExample = () => {

    console.log('ClockExample')

    const [clock, setClock] = useState('00:00:00')

    useEffect(() => {
        console.log('useEffect')

        setInterval(() => {
            let date = new Date
            let hour = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            setClock(hour)
        }, 1000)
    }, [])

    return <time>
        {clock}
    </time>
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