import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter >
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);