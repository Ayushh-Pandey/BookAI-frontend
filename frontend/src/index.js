import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ColorModeContext from './context/ColorModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorModeContext>
    <App />
    </ColorModeContext>
    
  </React.StrictMode>
);


