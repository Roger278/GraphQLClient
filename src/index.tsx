import React from 'react'
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <h1>Hello React!</h1>
    </React.StrictMode>,
    document.getElementById('app-root')
  );

// const container = document.getElementById('app-root')!
// const root = createRoot(container)
// root.render(<h1>Hello React!</h1>)
