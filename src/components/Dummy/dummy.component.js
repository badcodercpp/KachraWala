import React, { useState, useEffect } from 'react';

import produce from 'immer';

// const a ={
//     hi:[
//         {
//             hello:"haha"
//         }
//     ]
// }


// const b = produce(a,(draft)=>{
//     draft.hi.forEach(hello=>{
//         hello.hello="hgahjsgjgdajhgjha";
//     })
// });
// console.log(b)

// we can expect react context in util fns so dont call directly
function Util(...args){
    const [count] = args;
    console.log("this is utill call with apply")
    console.log(count)
}

function clickHandler(){
    //setCount(count+1)
    const { handlers, argument } = this;
    const [setCount] = handlers;
    return setCount.apply(this,argument)
}

function PureFunctionalUI(props){
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `${count}`;
        Util.apply(undefined,[count])
    });
    
    return (
        <div>
            see this is pure functional component 
            click count is increasing
            <button onClick={clickHandler.bind({handlers:[setCount],argument:[count+1]})} >
                click to increase 
            </button>
        </div>
    )
}
export default PureFunctionalUI;