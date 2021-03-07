import React from 'react';
import Logo from './Components/Logo/index'
import Navbar from './Components/Navbar/index'
import BtnNavbar from './Components/Btn-Navbar/'


import Imagem1 from './Components/Imagens/imagem1';
import Imagem2 from './Components/Imagens/imagem2';


import Parte1 from './Components/Part-1/'
import Parte2 from './Components/Part-2/'
import Parte3 from './Components/Part-3/'
import Testimonials from './Components/Testimonials/index'
import Folter from './Components/Folter/index'

import './Style.css'

function App() {
  return (
    <div className="Container">
      <div className="d-flex">
        <Logo/>
        <Navbar/>
        <BtnNavbar/>
        
          
        
      </div>
      <div className="parte1">
       <Parte1/>
       <Imagem1/>
      </div>
      <div className="parte2">
        <Parte2/>
        <Imagem2/>
      </div>
      <div className="parte3">
        <Parte3/>
      </div>
      <Testimonials/>
      <Folter/>
      
      
    </div>
  );
}

export default App;
