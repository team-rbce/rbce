import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        {/* Todos os elementos dentro desse router ja vao vir com o header e o footer, se preocupar em desenhar apenas o conteudo */}
        <Route index element={ <Home /> } />

        {/* Colocar aqui a rota especifica e o componente referente a rota */}

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
