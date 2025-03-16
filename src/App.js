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

  if(tours.length===0){
    return (
      <div className='flex items-center justify-center flex-col h-[100vh]'>
           <h1>No Tours Left</h1>
           <button className="mt-[18px] py-[10px] px-[18px] border border-white bg-slate-500 text-white hover:bg-white hover:text-black transition-all duration-200" onClick={() => setTours(data)}>
                 Refresh
            </button>

      </div>
    )
  }
  return (
    <div className='w-[100vw] h-[100vh] font-poppins'>
      

      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
