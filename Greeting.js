import { useState } from "react";

const Greeting = () => {
const [changeText, setChangeText]=useState(false);

const clickHandler=()=> {
    setChangeText(res=>!res);
}

    return  <div>
         <h1>hello</h1>
         {!changeText&&<p>hai there</p>}
         {changeText && <p>changed</p>}
    <button onClick={clickHandler}>click</button>
        </div>
}
export default Greeting;