import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App }  from "./App"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  //  <Componente titulo="Titulo 1" contenido="Hola desde React"/>
  <App />
);

/*function Componente({titulo,contenido }) {  
  //const titulo = props.titulo;
  //const contenido = props.contenido;
  // const {titulo,contenido } = props;
  return (
  <div className='contenedo'> 
    <h1>{titulo}</h1>
    <div>{contenido}</div>
  </div>
  )
  
}*/
