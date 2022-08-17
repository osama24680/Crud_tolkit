import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Provider } from "react-redux"
import 'react-toastify/dist/ReactToastify.css';
import storeConfigure from "./Store/index"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeConfigure}>
      <App />
    </Provider>

  </React.StrictMode>
);

