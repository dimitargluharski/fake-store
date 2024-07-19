import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Home } from './pages/Home/Home';
import { Catalog } from './pages/Catalog/Catalog';
import { Navbar } from './components/Navbar/Navbar';
import { StoreLogo } from './components/StoreLogo/StoreLogo';

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
        </Routes>
      </main>
    </>
  );
}

export default App;
