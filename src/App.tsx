import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/accordion/Accordion';
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

    return (
        <div>
            <div>Controlled:</div>
            <OnOff onOff={onOff} setOnOff={setOnOff}/>
            <Rating value={rating} changeRating={changeRating}/>
            <Accordion title="title 1" accordionCollapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>


            <div>Uncontrolled:</div>
            <UncontrolledOnOff />
            <UncontrolledRating />
            <UncontrolledAccordion title="Uncontrolled Accordion"/>
        </div>
    );

}

export default App;