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

    const [filter, setFilter] = useState("all")

    let currentMoney = money
    if(filter === "Ruble")    {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS")
    }
    if(filter === "Dollars")    {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars")
    }
    const onClickFilterHandler = (item: "All" | "Ruble" | "Dollars") => {
        setFilter(item)
    }

    return (
        <Filter currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
    )
}

export default App;
