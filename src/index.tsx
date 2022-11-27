import React from 'react'
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import Overview from './components/overview/Overview';
import { DataProvider } from './context/DataContext';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
      <DataProvider>
        <Overview/>
      </DataProvider>
    </React.StrictMode>,
    document.getElementById('app-root')
  );
