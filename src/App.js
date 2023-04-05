import React from 'react';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import ToDo from './views/ToDo';
import PokemonDisplay from './views/PokemonDisplay';


export default function App() {

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        

        <Routes>
          <Route path='/' element={<ToDo />} />
          <Route path='/pokemon' element={<PokemonDisplay />} />
        </Routes>

      </div>


    </>
      
  )
}

