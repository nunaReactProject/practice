import { useState } from "react";

// CSS in JS

function App() {
    const [state, setState] = useState(0);
    const multiple = () => {
        setState(state * 3);
    };
    return (
        <div>
            <p>값 : {state}</p>
            <button onClick={multiple}></button>
        </div>
    );
}

export default App;
