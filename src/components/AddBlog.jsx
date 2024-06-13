import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddBlog = () => {
    const [data,changeData]=useState(
        
      [  {
            "name":"",
            "email":"",
            "password":""
        }
    ] 
    
)

const inputHandler=(event)=>{
    changeData({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8081/",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("successfully added")
                
            } else {
                alert("error")
                
            }
        }
    ).catch(
        (error)=>{
            console.log(error)
        }
    )
}
  return (
    <div>
              <h1 align="center"><u>Signup</u></h1>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">Name</label>
                  <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Email</label>
                <input type="text" className="form-control"  name='email' value={data.email} onChange={inputHandler}/>
                </div>
               
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <button className="btn btn-success" onClick={readValue}>Submit</button>
                </div>
                <p>Back to login page <Link to="/signin">Back</Link></p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddBlog