import {MdOutlineLogin} from 'react-icons/md'
import {FaSignOutAlt,FaUser} from 'react-icons/fa'
import {AiTwotoneHome} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='header'>
 <div className="logo">
  <Link to='/'><h3><AiTwotoneHome/>Home</h3></Link>
 </div>
 <ul>
  <li>
    <Link to='/login'><MdOutlineLogin/>Login</Link>
  </li>
  <li>
    <Link to='/register'><FaUser/>Register</Link>
  </li>
 </ul>

    </div>
  )
}

export default Navbar