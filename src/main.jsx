import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ContextProvider from './Context/Context.jsx';  // Make sure this is correctly pointing to your file

createRoot(document.getElementById('root')).render(
 
    <ContextProvider>  {/* Use ContextProvider instead of Context.Provider */}
      <App />
    </ContextProvider>
  
);
