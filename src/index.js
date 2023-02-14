import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// function App(props) {
//   return (
//     <h1>{props.saludo}, {props.nombre}</h1>
//   )
// }

// function withSaludo(WrappedComponent) {
//   return function WrappedComponentWithSaludo(saludo) {
//     return function ComponenteDeVerdad(props) {
//       return <>
//         <WrappedComponent {...props} saludo={saludo} />
//         <p>Accompany</p>
//       </>
//     }
//   }
// }

// const AppWithSaludo = withSaludo(App)('Wenas');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App saludo="Buenas" nombre="Nath" /> */}
    {/* <AppWithSaludo saludo="Hey" nombre="Juanita" /> */}
    <App />
  </React.StrictMode>
);
