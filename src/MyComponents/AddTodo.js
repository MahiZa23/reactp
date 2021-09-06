// import React from 'react'
import React, { useState, useEffect } from 'react';

export const AddTodo = ({ addTodo }) => {

  const [users, setUsers] = useState([]);
  // const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!users) {
      alert("Title or Description cannot be blank")
    }
    else {
      addTodo(users);
      setUsers("");
      // setTitle("");
      // setDesc("");
    }

  }

  useEffect(() => {
    fetch("http://3.6.93.159:7883/machstatz/add_new_user").then((result) => {
      result.json().then((resp) => {
        setUsers(resp)
      })
    })

  }, []);

  console.warn(users)

  return (

    <>
      <div className="container my-3">

        <h3>Add </h3>
        <form onSubmit={submit}>

          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">First Name</label>
            <input type="text" value={users} onChange={(e) => { setUsers(e.target.value) }} className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">Last Name</label>
            <input type="text"  className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
          </div>
          <select className="form-select mb-3" aria-label="Default select example">
            <option selected>Profiles</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <div className="col-auto mb-3">
          <label className ="visually-hidden" htmlFor="autoSizingInputGroup">Username</label>
          <div className ="input-group">
          <div className ="input-group-text">@</div>
          <input type ="text" className ="form-control" id="autoSizingInputGroup" placeholder="Username"/>
          </div>
          </div>

          <div className ="row mb-3">
          <label htmlFor="inputEmail3" className ="col-sm-2 col-form-label">Email</label>
          <div className ="col-sm-10">
          <input type ="email" className ="form-control" id="inputEmail3"/>
          </div>
          </div>

          <div className ="row mb-3">
          <label htmlFor="inputPassword3" className ="col-sm-2 col-form-label">Password</label>
          <div className ="col-sm-10">
          <input type ="password" className ="form-control" id="inputPassword3"/>
          </div>
          </div>

          <button type ="submit" className="btn btn-sm btn-success">Add Todo</button>
        </form>

      </div>

    </>
  )
}





{/* <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={users} onChange={(e) => { setUsers(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div> */}

{/* <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={users} onChange={(e) => { setUsers(e.target.value) }} className="form-control" id="desc" />
                  </div> */}

{/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div> */}