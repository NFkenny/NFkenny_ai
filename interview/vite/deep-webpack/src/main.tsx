import React from 'react'
import {
  createRoot
} from 'react-dom/client';
import Hello from './Hello';

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <Hello />
)