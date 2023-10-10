import React, { useState } from "react";

const Signup = () => {
    const [user,setUser] = useState({
        firstName: "",
        lastName:"",
        phone:"",
        email:"",
        password:""
    })

    const handleChange = (e) => {
      setUser({
        ...user,
        [e.target.id] : e.target.value
      })
    }
  return (
    <div className="container-fluid">
      <form>
        <input
          type="text"
          id="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          id="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          id="phone"
          value={user.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          id="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="text"
          id="password"
          value={user.password}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Signup;
