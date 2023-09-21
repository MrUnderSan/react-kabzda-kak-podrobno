import React, {useState} from 'react';

export default {
    title: 'TESTS/React.memo demo'
}

const NewMessagesCounter = (props: {count: number}) => {

    return <div>{props.count}</div>
}
const UsersSecret = (props: {users: string[]}) => {

    console.log('rendering Users')
    return (
        <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
    )
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('rendering Example1')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimysch', 'Valera', 'Artem'])

    const addUser = () => {
        setUsers([...users, 'Sveta ' + new  Date().getTime()])
    }

    return <>
        <button onClick={()=> setCounter(counter + 1)}></button>
        <button onClick={addUser}>addUser</button>
        <NewMessagesCounter count={counter} />
        <Users users={users} />
    </>
}