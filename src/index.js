import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import storeRedux from "./component/redux/redux"
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter> 
          <Provider store={storeRedux}>
              <App store={storeRedux} />  
          </Provider>
    </BrowserRouter>  
</React.StrictMode>,
);

