import Header from './components/Header'  
import './assets/css/style.css'
import Main from './components/Main'  
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'
import { useState } from 'react' 
import AuthProvider from './AuthProvider'


function App() {


  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
