import React from 'react';

type FilterPropsType = {
    currentMoney:Array<{banknots: string, value: number, number: string}>
    onClickFilterHandler:(value:"All" | "Ruble" | "Dollars") => void;
}

export const Filter = (props:FilterPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((currentMoney, index) => {
                    return (
                        <li key={index}>
                            <span>{currentMoney.banknots}</span>
                            <span>{currentMoney.value}</span>
                            <span>{currentMoney.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "15px"}}>
                <button onClick={() => props.onClickFilterHandler("All")}>All</button>
                <button onClick={() => props.onClickFilterHandler("Ruble")}>Ruble</button>
                <button onClick={() => props.onClickFilterHandler("Dollars")}>Dollar</button>
            </div>
        </>
    );
};

