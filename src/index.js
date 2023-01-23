import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import { App } from 'components/App';

import 'modern-normalize/modern-normalize.css';
import './App.module.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
