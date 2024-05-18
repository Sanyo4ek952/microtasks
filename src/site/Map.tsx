import React from 'react';

export const Map = () => {
    const foo1 = () => {
        console.log(100200);
    }
    const foo2 = (item: number) => {
        console.log(item);
    }

    return (
        <div>
            <button onClick={foo1}>Кнопка 1</button>
            <button onClick={() => foo2(100200)}>Кнопка 2</button>
        </div>
    );
};
