import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (value: string) => void
}


export const FullInput = (props: FullInputPropsType) => {
    const [title, setTitle] = useState('');
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = (title: string) => {
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={() => {
                onClickButtonHandler(title)
            }}>+
            </button>
        </div>
    );
};
