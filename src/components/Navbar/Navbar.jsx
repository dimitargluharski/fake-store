import { Link } from "react-router-dom"
import { FaMoon } from "react-icons/fa6";
import { IoSunnySharp } from "react-icons/io5";

export const Navbar = ({ theme, toggleTheme }) => {
  return (
    <div className={`flex items-center p-5 gap-5 rounded-md ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <nav className="flex gap-5 rounded-xl">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>

      <div className="cursor-pointer" title="Switch theme" onClick={toggleTheme}>
        {theme === 'light' ? (
          <FaMoon className="text-xl text-gray-500" />
        ) : (
          <IoSunnySharp className="text-xl text-yellow-500" />
        )}
      </div>
    </div>
  )
}
