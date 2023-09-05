import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Box from './components/Box';
import { useState } from 'react';

function App() {

  const [box, setBox] = useState([])

  const addBox = (newBox) => {
    setBox([...box, newBox]);
  }
  return (
    <div className="App">
      <Form addBox={addBox}/>
      <div className='d-flex space-evenly'>
      {box.map((box) => (
					<Box color={box.color} />
				))}
      </div>
    </div>
  );
}

export default App;
