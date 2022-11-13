import {useState,useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
    const [form,setForm] = useState({
      email: '',
        password: '',
    })

    const {email,password} = form

    const handleChange =(e)=>{
setForm({...form,[e.target.name]: e.target.value})
    }
    const handleSubmit=(e)=>{
e.preventDefault()
    }
  return (
    <>
      <section className='heading'>
        <h1><FaSignInAlt/> Login</h1>
 
      </section>
      <section className='form'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
 <input type="text" className="form-control" id='email' name='email' value={email} placeholder='Enter your email' onChange={handleChange}/>
 <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter your password' onChange={handleChange}/>
   </div>
    <div className="form-group">
        <button className='btn btn-block' type='submit'>Login</button>
    </div>
    </form>
      </section>
    </>
  )
}

export default Login
