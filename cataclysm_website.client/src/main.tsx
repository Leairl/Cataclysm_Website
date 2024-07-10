import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import ArenaLadder3v3 from './components/arena-ladder-3v3/arena-ladder-3v3.tsx'
//import ArenaLadder2v2 from './components/arena-ladder-2v2/arena-ladder-2v2.tsx'
//import ArenaLadder5v5 from './components/arena-ladder-5v5/arena-ladder-5v5.tsx'
//import ArenaLadderRBG from './components/arena-ladder-rbg/arena-ladder-rbg.tsx'
import HomePage from './components/home-page/home-page.tsx'
import ProfilePage from './components/profile/profile.tsx'
import RegisterPage from './components/register/register.tsx'
import LoginPage from './components/login/login.tsx'
import NavBar from './components/nav/nav-bar.tsx'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import './index.css'
import RankingsPage from './components/rankings/rankings.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme accentColor="blue" radius="none" appearance='dark'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <div><NavBar></NavBar><HomePage></HomePage></div> }>
          <Route index element={<div></div>} />
          <Route path="profile/:region/:server/:characterName" Component={ProfilePage} />
          <Route path="rankings" element={<RankingsPage/>} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<div />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </Theme>
  </React.StrictMode>,
)
