import { useState } from 'react';

// CSS in JS

function App() {
    const [state, setState] = useState(0);

    const handleClick = () => {
        setState(state + 1);
    };

    return (
        <div>
            <p>값 : {state}</p>
            <button onClick={handleClick}>증가+</button>
        </div>
    );
}

export default App;
