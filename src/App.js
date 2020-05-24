import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Manufacturers from './components/Manufacturers/Manufacturers';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Manufacturers />
    </Router>
  );
}

export default App;
