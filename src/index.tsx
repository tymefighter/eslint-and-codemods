// Libraries
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';

// Components
import { App } from './App';

const rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.appendChild(rootElement)

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
