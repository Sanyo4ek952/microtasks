import React, {useState} from 'react';
import './App.css';


function App() {
   // let a = 1
let [a, setA] = useState(1);
    let onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    let onClickHandlerNull = () => {
        setA(a=0)
        console.log(a)
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerNull}>0</button>
        </div>
    )
}

export default App;
