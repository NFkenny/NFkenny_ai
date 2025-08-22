import { createRoot } from 'react-dom/client'
import React from 'react'
import Hello from './Hello.jsx'
// import { aMessage } from './a.js'
import './main.css'

createRoot(document.getElementById('app')).render(
    <Hello />
)

