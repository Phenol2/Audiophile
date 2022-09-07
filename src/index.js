import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom"
import { StoreProvider } from "./store/Storectx"
import { store } from "./reduxStore/store"
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
  <React.StrictMode>
   <HashRouter>
    <Provider store = {store}>
     <App />
     </Provider>
   </HashRouter>
  </React.StrictMode>
  </StoreProvider>
);


