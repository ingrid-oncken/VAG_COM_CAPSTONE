import MainNavBar from './Components/MainNavBar'
import MainJumbo from './Components/MainJumbo'
import Footer from './Components/Footer'
import Store from './Components/Store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNavBar />
        <Routes>
          <Route path="/" exact element={<MainJumbo />} />
          <Route path="/store" element={<Store />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
