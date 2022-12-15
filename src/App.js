// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//    <div className='title'></div>
//   );

//   };

// export default App;

import React from 'react';
import{BrowserRouter, Routes, Route} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      {/* si url ne correspond a rien on redirige vers la page home */}
      <Route path="*" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;

//on cree un routter
