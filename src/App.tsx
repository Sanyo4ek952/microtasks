import React, {useState} from 'react';
import './App.css';
import {Filter} from "./components/Filter/Filter";


function App() {
    // let a = 1
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    type NameButtonPropsType="All"| "RUBLS" | "Dollars";

let currentMoney =money
const  [filter, setFilter]= useState("All")
if (filter === "RUBLS") {
    currentMoney =  money.filter(filterMoney=> filterMoney.banknots === "RUBLS")
}
if (filter === "Dollars") {
    currentMoney =  money.filter(filterMoney=> filterMoney.banknots === "Dollars")
}
    const onClickHandlerFilter=(nameButton:NameButtonPropsType)=>{
        setFilter(nameButton)
    }
    return (
        <div>
            <ul>
                {currentMoney.map((currentMoney,index) => {
                    return(
                        <li key={index}>
                            <span>{currentMoney.banknots}</span>
                            <span>{currentMoney.value}</span>
                            <span>{currentMoney.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={()=>onClickHandlerFilter("All")}>All</button>
            <button onClick={()=>onClickHandlerFilter("RUBLS")}>Rubles</button>
            <button onClick={()=>onClickHandlerFilter("Dollars")}>Dollars</button>
        </div>
    )
}

export default App;
