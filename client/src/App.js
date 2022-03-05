import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import Proyects from './components/Proyects/Proyects.jsx';
import Certificates from './components/Certificates/Certificates.jsx';
import { NextUIProvider } from '@nextui-org/react';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/certificates' element={<Certificates />}/>
            <Route path='/proyects' element={<Proyects/>}/>
          </Routes>
        </div>
      </NextUIProvider>
    </BrowserRouter>
  )
}

export default App;
