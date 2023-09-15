import React from 'react';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (c: boolean)=>void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <>
            <AccordionTitle
                title={props.title}
                accordionCollapsed={props.accordionCollapsed}
                setAccordionCollapsed={props.setAccordionCollapsed}
            />
            { !props.accordionCollapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
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

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {

    return (
        <ul>
            {props.items.map((i, index) => <li key={index} onClick={() => props.onClick(i.value)}>{i.title}</li>)}
        </ul>
    )
}