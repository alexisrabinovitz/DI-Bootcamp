//PART 1 / 2 / 3 / 1

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/reducer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);











// //PART 1 FUNCTIONAL COMPONENT (WITHOUT REDUX DO NOT DO UNTIL NEXT EXERCISE XP2)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );


