import React, {useState} from "react";

export default () => {
    const [text, setText] = useState();

    return <>
        <div className='output'>{text}</div>
        <label htmlFor='field1'>Field</label>
        <input id='field1' onBlur={() => setText('Blur has happened')}/>
        </>;
}