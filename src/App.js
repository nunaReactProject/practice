import { useState } from 'react';

// CSS in JS

function App() {
  const [state, setState] = useState(0);

  return (
    <div>
      <p>값 : {state}</p>
    </div>
  );
}

export default App;
