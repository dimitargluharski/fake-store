import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="flex gap-5 bg-white p-5 rounded-xl">
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  )
}