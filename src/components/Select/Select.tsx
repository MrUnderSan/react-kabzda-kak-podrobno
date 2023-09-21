import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

export type ItemsType = {
    title: string
    value: any
}

type PropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemsType[]
}

export const SelectComponent = (props: PropsType) => {
    const [isCollapsed, setIsCollapsed] = useState(true)

    const [hoveredItem, setHoveredItem] = useState(props.value)

    const currentValue = props.items.find(i => i.value === props.value)?.title

    useEffect(() => {
        setHoveredItem(props.value)
    }, [props.value])

    const itemsRender = props.items.map(i => {
        const onClickItem = () => {
            props.onChange(i.value)
            setIsCollapsed(true)
        }

        const onMouseEnterHandler = () => {
            setHoveredItem(i.value)
        }

        return (
            <li
                key={i.value}
                className={styles.selectLi + ' ' + (i.value === hoveredItem ? styles.hovered : '')}
                onClick={onClickItem}
                onMouseEnter={onMouseEnterHandler}
            >{i.title}</li>
        )
    })

    const onClickCurrentValue = () => {
        setIsCollapsed(false)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (!props.items[props.value - 1] && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
            props.onChange(1)
        }
        if (e.key === 'ArrowDown') {
            props.items[props.value] && props.onChange(props.value + 1)
            return
        }
        if (e.key === 'ArrowUp') {
            props.items[props.value - 2] && props.onChange(props.value - 1)
            return;
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setIsCollapsed(true)
        }
    }

    return (
        <div className={styles.selectWrapper}>
            <div
                className={styles.selectCurrent}
                onClick={onClickCurrentValue}
                onKeyDown={onKeyDownHandler}
                tabIndex={0}
            >{currentValue ? currentValue : ''}</div>
            {!isCollapsed && (
                <div className={styles.selectUlWrapper}>
                    <ul className={styles.selectUl}>{itemsRender}</ul>
                </div>
            )}
        </div>
    );
};

export const Select = React.memo(SelectComponent)