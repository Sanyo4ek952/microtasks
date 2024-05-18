import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {Map} from "./site/Map";

function App() {
    return (
        <>
            <Header title={"Header"}/>
            <Body titleForBody={"Body"}/>
            <Footer titleForFooter={"Footer"}/>
            <Map/>
        </>
    )
}

export default App;
