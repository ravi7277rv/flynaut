import React, { MouseEventHandler } from "react";

interface myProp{
    clickHandler:MouseEventHandler<HTMLButtonElement>,
    children:string
}
const Button=(props:myProp)=>{

    console.log("rendering button");

    return(
        <button onClick={props.clickHandler}>{props.children}</button>
    )
}

export default React.memo(Button);