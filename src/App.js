import { useState } from 'react';
import data from './data.js';
import './App.css';
import Tours from "./Components/tours.js"

function App() {
  const [tours, setTours] = useState(data)

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  return (
    <div>
      <h1>Hello</h1>

      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
