import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {Map} from "./site/Map";
import {Button} from "./components/Button";

function App() {
    const Button1Foo = (subscriber:string, age:number) => {
        console.log(subscriber,age)
    }
    const Button2Foo = (subscriber:string, age?:number) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log("stupid button")
    }

    return (
        <>
            {/*            <Header title={"Header"}/>
            <Body titleForBody={"Body"}/>
            <Footer titleForFooter={"Footer"}/>
            <Map/>*/}
            <Button name={"My button 1"} callBack={()=>Button1Foo("Ivan",21)}/>
            <Button name={"My button 2"} callBack={()=>Button2Foo("Vasya")}/>
            <Button name={"Stupid"} callBack={Button3Foo}/>
        </>
    )
}

export default App;
