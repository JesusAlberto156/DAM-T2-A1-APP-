import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//import MyFunctions from './functions/MyFunctions.jsx'
//import MyPromises from './functions/MyPromises.jsx'
//import MyPromisesAll from './functions/MyPromisesAll.jsx'
//import MyPromisesRace from './functions/MyPromisesRace';
//import MyFetchsAPIs from './functions/MyFetchsAPIs';
//import MyFetchPost from './functions/MyFetchPost';
//import MyFetchPut from './functions/MyFetchPut';
//import MyFletchBlob from './functions/MyFetchBlob';

//import MyDataTypes from './methods/MyDateTypes';
//import MyObjects from './methods/MyObjects';
//import { Contador } from './components/contador';
//import { ContadorHook } from './components/contadorHook.jsx';
//import { Login } from './components/login.jsx';
import { Usuarios } from './components/usuarios.jsx';
import { Formulario } from './components/formulario.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    {/* Tema 3.1 - 3.10*/}
    
    {/*<MyFunctions />*/}
    {/*<MyPromises />*/}
    {/*<MyPromisesAll/>*/}
    {/*<MyPromisesRace/>*/}
    {/*<MyFetchsAPIs/>*/}
    {/*<MyFetchPost/>*/}
    {/*<MyFetchPut/>*/}
    {/*<MyFletchBlob/>*/}
    
    {/* Tema 3.1 - 3.10*/}
    
    {/* Tema 4.1 - 4.10*/}
    
    {/*<MyDataTypes/>*/}
    {/*<MyObjects/>*/}
    {/*<Contador/>*/}
    {/*<ContadorHook/>*/}
    {/*<Login/>*/}
    {/*<Usuarios/>*/}
    <Formulario/>

    {/* Tema 4.1 - 4.10*/}
    
  </StrictMode>,
);
