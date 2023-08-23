import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from './components/onOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {
    return (
        <div>
            <Accordion title="title 1" collapsed/>
            <Accordion title="title 2" collapsed={false}/>
            <Rating value={3}/>
            <OnOff />
            <OnOff />

            <UncontrolledAccordion title="Uncontrolled Accordion"/>
            <UncontrolledRating />
        </div>
    );

}

export default App;