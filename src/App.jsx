import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      {/* Todos os elementos dentro desse router ja vao vir com o header e o footer, se preocupar em desenhar apenas o conteudo */}
      <Route path="/" element={ <Layout /> }>

        <Route index element={ <Home /> } />

        {/* Colocar aqui a rota especifica e o componente referente a rota */}

        {/* <Route path="/sobre-nos" element={<About />} /> */}
        {/* <Route path="/nossos-projetos" element={<About />} /> */}
        {/* <Route path="/linha-do-tempo" element={<About />} /> */}
        {/* <Route path="/time-de-desenvolvimento" element={<About />} /> */}
      </Route>
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}
export default App;
