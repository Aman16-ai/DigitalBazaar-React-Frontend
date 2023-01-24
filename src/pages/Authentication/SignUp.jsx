import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { register } from '../../services/authService'

export default function SignUp() {
    const [user, setUser] = useState({
        'username': "",
        'firstname': "",
        'lastname': "",
        'email': "",
        'password': ""
    })
    const [credentials, setCredentials] = useState({
        'phone_no': 0,
        'age': 0,
        'gender': ""
    })
    const handleOnUserChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = async() => {
        console.log("running")
        const result = await register({user:user,...credentials})
        console.log(result)
        if(result.success === true) {
            localStorage.setItem("authToken",result.token.access)
            Navigate("/")
            window.location.reload()
        }
    }
    return (
        <div>



            <div className="container my-3">

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="name_in" name="username" onChange={handleOnUserChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="fname_in" name="firstname" onChange={handleOnUserChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lname_in" name="lastname" onChange={handleOnUserChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Phone No.</label>
                    <input type="number" className="form-control" id="lname_in" name="phone_no" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Age</label>
                    <input type="number" className="form-control" id="lname_in" name="age" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <input className="form-check-input" value="M" type="radio" name="gender" id="flexRadioDefault1" onChange={handleChange} />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Male
                    </label>
                    <input className="form-check-input" value="F" type="radio" name="gender" id="flexRadioDefault1" onChange={handleChange}/>
                    <label className="form-check-label" for="flexRadioDefault2">
                        Female
                    </label>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={handleOnUserChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleOnUserChange} name="password" />
                </div>
                <button onClick={handleSubmit} className="btn btn-primary">Sign up</button>
            </div>
        </div>
    )
}
