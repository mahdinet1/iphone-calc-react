import React from 'react'
import './button.css';

const Buttons = (props) => {
    return (
        <>
            <button className={props.class} onClick={()=>props.btn(props.content)}>{props.content}</button>
        </>
    )
}

export default Buttons
