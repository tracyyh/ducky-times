import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/nav'
import Merch from './pages/merch.js';
import Signup from './pages/signup.js';
import Contact from './pages/contact.js';
import ContactThanks from './pages/contactThanks.js';
import Home from './pages/home.js';
import SignupThanks from './pages/signupThanks.js';

function App () {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/merch' element={<Merch />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signupThanks' element={<SignupThanks />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contactThanks' element={<ContactThanks />} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App

