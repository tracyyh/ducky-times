import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.js'
import Merch from './pages/merch.js';

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/merch' element={<Merch />} />
          </Routes>
    </BrowserRouter>
    
  )
}

export default App

