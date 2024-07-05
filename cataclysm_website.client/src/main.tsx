import React from 'react'
import ReactDOM from 'react-dom/client'
//import ArenaLadder3v3 from './components/arena-ladder-3v3/arena-ladder-3v3.tsx'
//import ArenaLadder2v2 from './components/arena-ladder-2v2/arena-ladder-2v2.tsx'
//import ArenaLadder5v5 from './components/arena-ladder-5v5/arena-ladder-5v5.tsx'
//import ArenaLadderRBG from './components/arena-ladder-rbg/arena-ladder-rbg.tsx'
import HomePage from './components/home-page/home-page.tsx'
import NavBar from './components/nav/nav-bar.tsx'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme accentColor="blue" radius="none" appearance='dark'>
      <NavBar></NavBar>
      <HomePage>
      </HomePage>
    </Theme>
  </React.StrictMode>,
)
