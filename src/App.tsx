import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
    return (
        <div>
            <Accordion title="title 1" collapsed/>
            <Accordion title="title 2" collapsed/>
            <Accordion title="title 3" collapsed={false}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={1}/>

        </div>
    );

}

export default App;