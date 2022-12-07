import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>Smølfesiden</h1>
        <div className='links'>
            <Link to='/home'>Smølfealbums</Link>
            <Link to='/persons'>Smølfer og andet godtfolk</Link>
            <Link to='/create'>Opret nyt</Link>
        </div>
    </nav>
  )
}

export default Navbar