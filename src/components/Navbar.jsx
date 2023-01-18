import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Digital bazaar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/mycart">My Cart</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <h4 className="mx-2">Welcome</h4>

                        <Link className="btn btn-danger mx-1" to={"/logout"} type="submit">logout</Link>


                        <Link className="btn btn-danger mx-1" to="/login" type="submit">Login</Link>


                        <Link className="btn btn-danger mx-1" to="/register" type="submit">Sign up</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
