import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <>
            <AccordionTitle title={props.title}/>
            <button onClick={onClickHandler}>+/-</button>
            { !collapsed && <AccordionBody/> }
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}