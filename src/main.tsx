import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
)
