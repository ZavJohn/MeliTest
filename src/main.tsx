import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { MeliApp } from './meliApp';
import '../src/styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <MeliApp />
    </BrowserRouter>
  </React.StrictMode>
)

