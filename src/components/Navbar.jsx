import React from 'react'
import { Link } from 'react-router-dom'
import style from "./style/Navbar.module.css"
import logo from "../static/logo.png"
export default function () {
    return (
        <div className={style['container']}>
            <h4 id={style['heading']}>DigitalBazaar</h4>
            <input type="text" name="search" id={style['search']} placeholder="Search for products, brands and more" />
            <div className={style['user']}>
                <h6 id={style['username-heading']}>AMAN</h6>
                <div className={style['user-list-items']}>
                    <ul>
                        <li>Orders</li>
                        <li>Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
