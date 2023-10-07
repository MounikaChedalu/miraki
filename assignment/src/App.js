import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connect from './Components/Connect';
import Website from './Components/Website';
import Services from './Components/Services';
import Recommend from './Components/Recomanded';
import Testimonials from './Components/Testimonials';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function App() {
  return (
    <Router>
      {/* <Website /> */}
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/services" element={<Services />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  );
}

export default App;



