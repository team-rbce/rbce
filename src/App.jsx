import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        {/* <Route path="/sobre-nos" element={<About />} /> */}
        {/* <Route path="/nossos-projetos" element={<About />} /> */}
        {/* <Route path="/linha-do-tempo" element={<About />} /> */}
        {/* <Route path="/time-de-desenvolvimento" element={<About />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}
export default App;
