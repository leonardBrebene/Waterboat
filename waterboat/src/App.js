import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import AddbookingPage from './pages/AddbookingPage';
import Bookinglist from './pages/Bookinglist';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"; 
import './App.css';

function App() {
  return (
    <Router>
              <Switch>
                  <Route path="/add-booking">
                    <AddbookingPage/>
                  </Route>
                  <Route path="/booking-list">
                      <Bookinglist/>
                  </Route>
                  <Route path="/">
                    <Homepage />
                  </Route>
              </Switch>
          </Router>
  );
}

export default App;