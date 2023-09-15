import {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'tests/input'
}

export const UncontrolledInput = () => <input/>

export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return <><input onChange={onChangeHandler}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value}</>
}
