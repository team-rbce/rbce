import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      {/* <Route path="/sobre-nos" element={<About />} /> */}
      {/* <Route path="/nossos-projetos" element={<About />} /> */}
      {/* <Route path="/linha-do-tempo" element={<About />} /> */}
      {/* <Route path="/time-de-desenvolvimento" element={<About />} /> */}
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}
export default App;
