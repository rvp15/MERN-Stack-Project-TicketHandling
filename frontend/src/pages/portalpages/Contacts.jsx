import React from 'react'
import { Link} from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

function Contacts() {
  return (
  <div>
      <div  className='portal-menu'>Contacts</div>
    <Link to="/profile"><MdArrowBackIosNew/></Link>
  </div>
  )
}

export default Contacts