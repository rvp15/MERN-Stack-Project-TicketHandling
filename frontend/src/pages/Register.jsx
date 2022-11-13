import {useState,useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
    const [form,setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmpwd: ''
    })

    const {name,email,password,confirmpwd} = form

    const handleChange =(e)=>{
setForm({...form,[e.target.name]: e.target.value})
    }
    const handleSubmit=(e)=>{
e.preventDefault()
    }
  return (
    <>
      <section className='heading'>
        <h1><FaUser/>Register</h1>
        <p>Create an Account</p>
      </section>
      <section className='form'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
 <input type="text" className="form-control" id='name' name='name' value={name} placeholder='Enter your name' onChange={handleChange}/>
 <input type="text" className="form-control" id='email' name='email' value={email} placeholder='Enter your email' onChange={handleChange}/>
 <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter your password' onChange={handleChange}/>
 <input type="password" className="form-control" id='confirmpwd' name='confirmpwd' value={confirmpwd} placeholder='Confirm password' onChange={handleChange}/>
    </div>
    <div className="form-group">
        <button className='btn btn-block' type='submit'>Submit</button>
    </div>
    </form>
      </section>
    </>
  )
}

export default Register
