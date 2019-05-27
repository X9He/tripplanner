import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PlanTrip from './components/PlanTrip/PlanTrip'

function App() {
  return (
      <BrowserRouter>
          <div className="app">
              <Navbar/>
              <PlanTrip />
          </div>
      </BrowserRouter>
  );
}

export default App;
