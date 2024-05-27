import React from 'react';

type ButtonProps = {
    onClickButtonHandler: ()=>void
}

export const Button = (props:ButtonProps) => {
    return (
        <button onClick={props.onClickButtonHandler}>+</button>
    );
};

