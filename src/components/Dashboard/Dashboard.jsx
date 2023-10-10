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
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">User Details</div>
      <div className="d-flex align-items-center">
        <button className="btn btn-success my-2">Add User</button>
        <button className="btn btn-danger my-2">Edit</button>
      </div>
      <div className="col-sm-10 shadow-sm text-center my-3 mx-auto">
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
              <tr style={{verticalAlign:'middle'}}>
                <th scope="row">1</th>
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
  );
};

export default Dashboard;
