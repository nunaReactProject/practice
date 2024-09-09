import { useState } from 'react';

// CSS in JS

function App() {
  const [state, setState] = useState(0);
  const onToggleButton = ()=> {
    setState(state/2)
  }

  return (
    <div>
      <button onClick={onToggleButton}>버튼</button>
      <p>값 : {state}</p>
    </div>
  );
}

export default App;
