import { useState } from "react";

// CSS in JS
//리커밋

function App() {
    const [state, setState] = useState(0);
    const handleClick = () => {
        setState(state + 1);
    };
  
    const minus = ()=>{
        setState(state-1)
    };
  const multiple = () => {
        setState(state * 3);
    };
    const onToggleButton = ()=> {
      setState(state/2)
    };
    return (
        <div>
            <p>값 : {state}</p>
            <button onClick={multiple}></button>
            <button onClick={handleClick}>증가+</button>
            <button onClick={minus}>빼기</button>
            <button onClick={onToggleButton}>버튼</button>
        </div>
    );
}

export default App;
