import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
//import MyFunctions from './functions/MyFunctions.jsx'
//import MyPromises from './functions/MyPromises.jsx'
//import MyPromisesAll from './functions/MyPromisesAll.jsx'
//import MyPromisesRace from './functions/MyPromisesRace';
import MyFetchsAPIs from './functions/MyFetchsAPIs';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    {/*<MyFunctions />*/}
    {/*<MyPromises />*/}
    {/*<MyPromisesAll/>*/}
    {/*<MyPromisesRace/>*/}
    <MyFetchsAPIs/>
  </StrictMode>,
);
