import {useState} from 'react';
import {ChildComponent} from './ChildComponent';
 
export function App() {
  const [parentState, setParentState] = useState<string>('Hello from Parent');

  const handleButtonClick = () => {
    setParentState('Updated Parent State');
  };

  return (
    <>
      <div>
        <h1>Parent Component</h1>
        <button onClick={handleButtonClick}>Update State</button>
        <ChildComponent childProp={parentState} />
      </div>
    </>
  );
}

export default App;
 