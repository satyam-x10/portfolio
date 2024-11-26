// App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Work from './components/Work/Work'
import Portfolio from './components/Portfolio/Portfolio'
import Experties from './components/Experties/Experties'
import People from './components/People/People'
import Footer from './components/Footer/Footer'
import OrmaApk from './redirects/orma_apk'
import css from './styles/App.module.scss'

const MainLayout = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Work/>
      <Portfolio/>
      <Experties/>
      <People/>
      <Footer/>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/orma/apk" element={<OrmaApk />} />
      </Routes>
    </Router>
  )
}

export default App