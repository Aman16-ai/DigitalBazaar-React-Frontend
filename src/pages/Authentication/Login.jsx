import React from 'react'

export default function Login() {
  return (
    <div>
            <div className="container my-3">
        <form action="/account/handlelogin" method="POST">
          
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Username</label>
                <input type="text" className="form-control" id="name_in" name="Username_login"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"
              name="pass_login"
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </div>
    </div>
  )
}
