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
            <AccordionTitle title={props.title} onClickHandler={onClickHandler} />
            {!collapsed && <AccordionBody/>}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClickHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 style={{cursor: 'pointer'}} onClick={props.onClickHandler}>{props.title}</h3>
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