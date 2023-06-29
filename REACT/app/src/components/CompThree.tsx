import React, { useContext } from 'react';
import style from './commonStyle.module.css';
import { Message } from './Message';


// forwarding ref to make div element available in the parent component
const CompThree = React.forwardRef<HTMLDivElement,{}>((props,ref)=>{

    return(
        <div className={style.containerThree} ref={ref}>

            <Message />

        </div>
    )
});

export default React.memo(CompThree);