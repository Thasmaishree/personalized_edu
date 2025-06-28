import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">LearnSmart</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/tutor" className="hover:underline">Tutor</Link>
          <Link to="/code" className="hover:underline">Code Tool</Link>
          <Link to="/mock" className="hover:underline">Mock Interview</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
