import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/arena-ladder/arena-ladder.tsx'
import NavBar from './components/nav/nav-bar.tsx'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme accentColor="blue" radius="none" appearance='dark'>
      <NavBar></NavBar>
    <App />
    </Theme>
  </React.StrictMode>,
)
