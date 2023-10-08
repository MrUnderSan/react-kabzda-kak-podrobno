import React, {useCallback, useMemo, useState} from 'react';
import {Select} from '../components/Select/Select';

export default {
    title: 'TESTS/useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let resultA : number
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000000) {
                fake++
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={e => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={e => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>


    </>
}

const UsersSecret = (props: { users: string[] }) => {

    console.log('Users rendering')
    return (
        <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
    )
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo rendering')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const newArr = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])


    const addUser = () => {
        setUsers([...users, 'Sveta ' + new  Date().getTime()])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <button onClick={addUser}>addUser</button>
        <Users users={newArr}/>
    </>
}


const cities = [
    {title: 'Dnepr', value: 1, country: 'Ukraine'},
    {title: 'Kiev', value: 2, country: 'Ukraine'},
    {title: 'Lviv', value: 3, country: 'Ukraine'},
    {title: 'Mogilev', value: 4, country: 'Belarus'},
    {title: 'Gomel', value: 5, country: 'Belarus'},
    {title: 'Vitebsk', value: 6, country: 'Belarus'}
]

export const SelectWithUseMemo = () => {

    console.log('SelectWithUseMemo rendering')
    const [counter, setCounter] = useState(0)

    const [value, setValue] = useState<number | undefined>(1)

    const onChangeHandler = (v: number) => {
        setValue(v)
    }

    const filteredCities = useMemo(()=> {
        console.log('filtering cities')
        return cities.filter(c => c.country === 'Belarus')
    }, [cities])

    return <>

        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}

        <Select items={filteredCities} value={value} onChange={onChangeHandler}/>

    </>
}


export const LikeUseCallback = () => {

    console.log('LikeUseCallback rendering')
    const [counter, setCounter] = useState(0)

    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const newArr = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf('a') > -1)
    }, [books])

    // const addBook = () => {
    //     setBooks([...books, 'Angular ' + new  Date().getTime()])
    // }
    //
    // const memoAddBook = useMemo(() => addBook, [books])

    const memoAddBook = useMemo(() => {
        return () => {
            setBooks([...books, 'Angular ' + new  Date().getTime()])
        }
    }, [books])

    const memoAddBook2 = useCallback(() => {
        setBooks([...books, 'Angular ' + new  Date().getTime()])
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book books={newArr} addBook={memoAddBook}/>
    </>
}

const BooksSecret = (props: { books: string[], addBook: () => void }) => {

    console.log('Books rendering')
    return (
        <div>
            <button onClick={props.addBook}>add book</button>
            <div>{props.books.map((b, i) => <div key={i}>{b}</div>)}</div>
        </div>
    )
}

const Book = React.memo(BooksSecret)