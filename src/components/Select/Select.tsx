import React, {useState} from 'react';
import './Select.css'

export type ItemsType ={
    title: string
    value: any
}

type PropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemsType[]
}

export const Select = (props: PropsType) => {
    const [isCollapsed, setIsCollapsed] = useState(true)

    const currentValue = props.items.find(i => i.value === props.value)?.title

    const itemsRender = props.items.map(i => {
        const onClickItem = () => {
            props.onChange(i.value)
            setIsCollapsed(true)
        }

        return (
            <li
                key={i.value}
                className={'select-li'}
                onClick={onClickItem}
            >{i.title}</li>
        )
    })

    const onClickCurrentValue = () => {
        setIsCollapsed(false)
    }

    return (
        <div className={'select-wrapper'}>
            {isCollapsed
                ? <div className={'select-current'} onClick={onClickCurrentValue}>{currentValue ? currentValue : 'make a choice'}</div>
                : <ul className={'select-ul'}>{itemsRender}</ul>}
        </div>
    );
};