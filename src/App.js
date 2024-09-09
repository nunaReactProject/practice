import { useState } from 'react';

// CSS in JS

function App() {
  const [state, setState] = useState(0);
  const minus = ()=>{
    setState(state-1)
  }

  return (
    <div>
      <p>값 : {state}</p>
      <button onClick={minus}>빼기</button>
    </div>
  );
}

export default App;
