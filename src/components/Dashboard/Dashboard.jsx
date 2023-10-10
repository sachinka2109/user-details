import React, { useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Sachin",
      lastName: "Kaythamwar",
      phone: "9604725671",
      email: "sachinkaythamwar@gmail.com",
      admin: true,
    },
    {
      id: 2,
      firstName: "Shubham",
      lastName: "Kaythamwar",
      phone: "9604725670",
      email: "shubhamkaythamwar@gmail.com",
      admin: false,
    },
  ]);

  const [singleUser,setSingleUser] = useState({
    id: users.length + 1,
    firstName:'',
    lastName:'',
    phone:'',
    email:''
  })

  const [addUser, setAddUser] = useState(false);

  const handleAddUser = () => {
    setAddUser(!addUser);
  };

  const handleFormInputs = (e) => {
    setSingleUser({
      ...singleUser,
      [e.target.id]: e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, singleUser]);
    setSingleUser({
    });
    setAddUser(false);
  }

  return (
    <>
      {addUser ? (
        <form onSubmit={handleFormSubmit}>
          <div class="mb-3">
            <label for="firstName" class="form-label">
              firstname
            </label>
            <input type="text" class="form-control" id="firstName" value={singleUser.firstName} onChange={handleFormInputs}/>
          </div>
          <div class="mb-3">
            <label for="lastName" class="form-label">
              lastName
            </label>
            <input type="text" class="form-control" id="lastName" value={singleUser.lastName} onChange={handleFormInputs}/>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">
              phone
            </label>
            <input type="text" class="form-control" id="phone" value={singleUser.phone} onChange={handleFormInputs}/>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              email
            </label>
            <input type="text" class="form-control" id="email" value={singleUser.email} onChange={handleFormInputs}/>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <button type="button" class="btn btn-danger" onClick={handleAddUser}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <div className="bg-danger text-light text-center">User Details</div>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-start">
              <div className="d-flex align-items-center">
                <button type="button" className="btn btn-success my-2" onClick={handleAddUser}>Add User</button>
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
                    {users.map((user) => (
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
                          <button className="btn btn-danger icon-btn">
                            <i class="fa-solid fa-trash"></i>
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
