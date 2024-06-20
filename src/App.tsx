import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput/FullInput";
import {Input} from "./components/Input/Input";
import {Button} from "./components/Input/Button";


function App() {

    const [server, setServer] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    const [title, setTitle] = useState('');

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        let newMessage = event.target.value;
        setTitle(newMessage)
    }

    const onClickButtonHandler = ()=>{
        addMessage(title)
    }

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setServer([newMessage, ...server])
        console.log(server)
    }

    return   (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} onChangeInputHandler={onChangeInputHandler}/>
            <Button onClickButtonHandler={onClickButtonHandler}/>
            {server.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}

export default App;
