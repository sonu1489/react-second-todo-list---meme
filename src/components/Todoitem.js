
import React from 'react';

function Todoitem (props){
    const completeStyle ={
        fontStyle:"italic",
        color:"#cdcdcd",
        TextDecoration:"line-through"
    }
    return (
   <div class="Todo-item">
        <input type="checkbox" checked={props.item.completed}
         onChange={(event)=>{props.handleChange(props.item.id)}}
        />
        
        <h4 style={props.item.completed ? completeStyle : null}>{props.item.text}</h4>
        <hr/>
    </div>
    );
}

export default Todoitem









 