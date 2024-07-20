import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Catalog } from './pages/Catalog/Catalog';
import { Navbar } from './components/Navbar/Navbar';
import { StoreLogo } from './components/StoreLogo/StoreLogo';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext/ThemeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'bg-gray-300' : 'bg-gray-900 text-white'}>
      <header className={`w-full flex items-center justify-between ${theme === 'light' ? 'bg-cyan-600' : 'bg-cyan-900'} p-5`}>
        <StoreLogo />
        <Navbar toggleTheme={toggleTheme} theme={theme} />
      </header>

      <main className={` bg-red-500`}>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/catalog" element={<Catalog theme={theme} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;