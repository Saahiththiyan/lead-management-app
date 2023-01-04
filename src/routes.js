import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Leads from './pages/Leads'
// import About from './pages/About';
// import Lead from './pages/Lead';
// import NotFound from './pages/NotFound';

function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/leads' element={<Leads />} />

      </Routes>
      {/* <Route exact path="/about" component={About} />
      <Route exact path="/lead/:id" component={Lead} />
      <Route component={NotFound} /> */}
    </BrowserRouter>
  )
}

export default AppRoutes
