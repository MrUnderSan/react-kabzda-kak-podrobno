import React from 'react';

type AccordionPropsType = {
    title: string,
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    return (
        <>
            <AccordionTitle title={props.title}/>
            { !props.collapsed && <AccordionBody/> }
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