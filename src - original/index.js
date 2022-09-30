import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
//Presenta en la web los componentes React en este caso presenta el componente app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/* Si desea comenzar a medir el rendimiento de su aplicación, pase una función 
para registrar los resultados (por ejemplo: reportWebVitals(console.log)) o 
envíela a un punto final de análisis. Más información: https://bit.ly/CRA-vitals

If you want to start measuring performance in your app, pass a function
 to log results (for example: reportWebVitals(console.log))
 or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
*/
reportWebVitals();