import React from 'react';

type AccordionPropsType = {
    title: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (c: boolean)=>void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <>
            <AccordionTitle
                title={props.title}
                accordionCollapsed={props.accordionCollapsed}
                setAccordionCollapsed={props.setAccordionCollapsed}
            />
            { !props.accordionCollapsed && <AccordionBody/> }
        </>
    )
}

type AccordionTitlePropsType = {
    title: string,
    accordionCollapsed: boolean
    setAccordionCollapsed: (c: boolean)=>void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => {
        props.setAccordionCollapsed(!props.accordionCollapsed)
    }
    return (
        <h3 onClick={onClickHandler}>{props.title}</h3>
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