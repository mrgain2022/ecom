import React from "react";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter'

import './assets/css/vendor.min.css';
import './assets/vendor/bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/theme.minc619.css';

function App() {
  return (
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
