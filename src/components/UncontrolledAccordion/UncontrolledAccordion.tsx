import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './reducer';

type AccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    const onClickHandler = () => {
        //setCollapsed(!collapsed)
        dispatch({type: TOGGLE_COLLAPSED})
    }

    return (
        <>
            <AccordionTitle title={props.title} onClickHandler={onClickHandler} />
            {!state.collapsed && <AccordionBody/>}
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