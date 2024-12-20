import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('algolia-search-results-root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
