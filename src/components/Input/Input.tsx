import React, {ChangeEvent} from 'react';

type InputProps = {
    title: string;
    onChangeInputHandler:(event: ChangeEvent<HTMLInputElement>)=>void
}

export const Input = (props:InputProps) => {



    return (
        <input value={props.title} onChange={props.onChangeInputHandler} />
    );
};

