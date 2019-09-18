import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PlanTrip from './screens/PlanTrip/PlanTrip'
import BrowseTrips from "./screens/BrowseTrips/BrowseTrips";

function App() {
  return (
      <BrowserRouter>
          <div className="app">
              <Navbar/>
              <PlanTrip />
              {/*<BrowseTrips />*/}
          </div>
      </BrowserRouter>
  );
}

export default App;
