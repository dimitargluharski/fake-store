import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Home } from './pages/Home/Home';
import { Catalog } from './pages/Catalog/Catalog';
import { Navbar } from './components/Navbar/Navbar';
import { StoreLogo } from './components/StoreLogo/StoreLogo';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <div className='bg-gray-300'>
      <header className='w-full flex items-center justify-between bg-cyan-600 p-10 '>
        <StoreLogo />
        <Navbar />
      </header>

      <main className='absolute top-36'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
