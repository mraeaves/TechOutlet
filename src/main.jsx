import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TopNav from './components/nav/topnav.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TopNav />
    <App />
  </React.StrictMode>,
)
