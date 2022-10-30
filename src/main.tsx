import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from './context/ThemeContext'
import { Page } from './Page'
import './style.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  </React.StrictMode>
)
