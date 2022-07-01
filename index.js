import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeContextProvider from '../src/context/Theme/themeContext';
import axios from 'axios';


axios.defaults.baseURL = 'https://jsonplaceholder.ir'
axios.defaults.headers.post['Contetnt-Type'] = 'application/json';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
