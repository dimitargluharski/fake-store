import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Home } from './pages/Home/Home';
import { Catalog } from './pages/Catalog/Catalog';
import { Navbar } from './components/Navbar/Navbar';
import { StoreLogo } from './components/StoreLogo/StoreLogo';
import { Register } from './pages/Register/Register';

function App() {
  return (
    <>
      <header className='w-full flex items-center justify-between bg-cyan-600 p-10'>
        <StoreLogo />
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
