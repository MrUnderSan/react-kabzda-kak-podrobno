import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, ValueType} from './components/rating/Rating';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {OnOff} from './components/onOff/OnOff';

function App() {

    const [rating, setRating] = useState<ValueType>(0)

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    const [onOff, setOnOff] = useState<boolean>(true)

    const changeRating = (v: ValueType) => {
        setRating(v)
    }

    const items = [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}
    ]

    return (
        <div>
            <div>Controlled:</div>
            <OnOff onOff={onOff} setOnOff={setOnOff}/>
            <Rating value={rating} changeRating={changeRating}/>
            <Accordion
                title="title 1"
                accordionCollapsed={accordionCollapsed}
                setAccordionCollapsed={setAccordionCollapsed}
                items={items}
                onClick={(v: any)=>{}}
            />


            <div>Uncontrolled:</div>
            <UncontrolledOnOff />
            <UncontrolledRating />
            <UncontrolledAccordion title="Uncontrolled Accordion"/>
        </div>
    );

}

export default App;