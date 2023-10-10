import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const [user,setUser] = useState({
    email:"",
    password:""
  })

  const [users,setUsers] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    })
  }


  async function getUsers() {
    try {
      let response = await (await fetch('http://localhost:3002/admin',{method:'GET'})).json();
      setUsers(response)
      // console.log(response);
    }catch(err) {
      throw new Error(err.message);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    try{
     let result = users.find((item) => item.email === user.email && item.password === user.password)
     console.log(result);
     if(result) {
       localStorage.setItem('token','1');
       navigate('/dashboard')
     }
    }catch(err) {
      throw new Error(err)
    }
  }

  useEffect(()=> {
    getUsers();
  },[])
  return (
    <div className='container-fluid'>
      <form onSubmit={onSubmit}>
        <input type="text" id='email' value={user.email} onChange={handleChange}/>
        <input type="password" id='password' value={user.password} onChange={handleChange} />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Signin