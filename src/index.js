import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import ColorThemeProvider from "./contexts/colorThemeProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ColorThemeProvider>
        <App/>
    // </ColorThemeProvider>
);

// High Order Component
