import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { env } from './configs';
import App from './app';
import './app/index.css';

const root = document.getElementById('root');

if (!root) throw new Error('No root element found');

env.initEnv();

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

