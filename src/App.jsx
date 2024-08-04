import react from 'react'
import './App.css'
import MainPage from './layouts/MainPage/MainPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Autorization from './layouts/Authorization/Autorization'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Autorization />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;