import React, {useCallback, useMemo, useState} from 'react';
export default {
    title: 'TESTS/useCallback'
}

export const UseCallback = () => {

    console.log('LikeUseCallback rendering')
    const [counter, setCounter] = useState(0)

    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const newArr = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf('a') > -1)
    }, [books])

    const memoAddBook = useCallback(() => {
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