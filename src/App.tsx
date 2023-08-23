import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating, RatingPropsType, valueType} from './components/rating/Rating';
import {OnOff} from './components/onOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {

    const [rating, setRating] = useState<valueType>(3)

    const changeRating = (v: valueType) => {
        setRating(v)
    }

    return (
        <div>

            {/*<Accordion title="title 1" collapsed/>*/}
            {/*<Accordion title="title 2" collapsed={false}/>*/}
            <Rating value={rating} changeRating={changeRating}/>

            <OnOff />
            <UncontrolledRating />
            <UncontrolledAccordion title="Uncontrolled Accordion"/>
        </div>
    );

}

export default App;