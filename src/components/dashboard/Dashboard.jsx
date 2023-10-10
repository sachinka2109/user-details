import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const phoneRegex = /^\+91[1-9]\d{9}$/;
  const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
  const [users, setUsers] = useState([]);

  const [singleUser, setSingleUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState({
    phoneBool: true,
    phoneError: "",
    emailBool: true,
    emailError: "",
  });

  const [addUser, setAddUser] = useState(false);

  const handleAddUser = () => {
    setAddUser(!addUser);
  };

  const handleFormInputs = (e) => {
    setSingleUser({
      ...singleUser,
      [e.target.id]: e.target.value,
    });
  };

  const phoneTest = phoneRegex.test(singleUser.phone);
  const emailTest = emailRegex.test(singleUser.email);

  const handleFormSubmit = async(e) => {
    console.log(singleUser);
    console.log(phoneTest);
    e.preventDefault();
    if (phoneTest === false) {
      console.log('phone test failed');
      setError({
        phoneBool: true,
        phoneError: "Please Enter valid phone number",
      });
    } else
    if (emailTest === false) {
      setError({
        emailBool: true,
        emailError: "Please Enter valid email",
      });
    }
    if (
      phoneTest === true &&
      emailTest === true
    ) {
      // setUsers([...users, singleUser]);
      let response = await (await fetch('http://localhost:3001/users',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(singleUser)})).json();
      setAddUser(false);
      getUsers();
    }
  };

  useEffect(()=> {
    getUsers();
  },[])

  async function getUsers() {
    try {
      let response = await (await fetch('http://localhost:3001/users',{method:'GET'})).json();
      setUsers(response)
      // console.log(response);
    }catch(err) {
      throw new Error(err.message);
    }
  }

  const deleteUser = async(id) => {
    try {
      let response = await (await fetch(`http://localhost:3001/users/${id}`,{method:'DELETE'})).json();
      setUsers(response)
      // console.log(response);
    }catch(err) {
      throw new Error(err.message);
    }
  }

  const logoutHandler = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <>
      {addUser ? (
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              firstname
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={singleUser.firstName}
              onChange={handleFormInputs}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              lastName
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={singleUser.lastName}
              onChange={handleFormInputs}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={singleUser.phone}
              onChange={handleFormInputs}
            />
            {error.phoneBool && (
              <div className="">{error.phoneError}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={singleUser.email}
              onChange={handleFormInputs}
            />
            {error.emailBool && (
              <div className="invalid-feedback">{error.emailError}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type="button" className="btn btn-danger" onClick={handleAddUser}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <div className="bg-danger text-light text-center">User Details <button onClick={logoutHandler}>Logout</button></div>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-start">
              <div className="d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-success my-2"
                  onClick={handleAddUser}
                >
                  Add User
                </button>
                <button className="btn btn-danger my-2">Edit</button>
              </div>
              <div className="col-sm-12 shadow-sm text-center my-3">
                <table className="table table-hover">
                  <thead className="table-primary">
                    <tr>
                      <th>#</th>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Admin</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="table-success">
                    {users.length >0 && users.map((user) => (
                      <tr style={{ verticalAlign: "middle" }} key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.admin ? "Yes" : "No"}</td>
                        <td>
                          <button className="btn btn-primary icon-btn mx-2">
                            <i className="fa-solid fa-pencil"></i>
                          </button>
                          <button className="btn btn-danger icon-btn" onClick={()=> deleteUser(user.id)}>
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
