import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import style from "./style/Navbar.module.css"
import logo from "../static/logo.png"
import ordericon from "../static/icons/ordericon.png"
import logouticon from "../static/icons/power-off.png"
import cartIcon from "../static/icons/carticon.png"
import notificationIcon from "../static/icons/notificationicon.png"
import LoginModal from './LoginModal'
import { useSelector } from 'react-redux'

export default function () {

    const [openLoginModal,setOpenLoginModal] = useState(false)
    const navigate = useNavigate()

    const {user,isAuthenticated} = useSelector(state => state.user)
    const handleCloseLoginModal = () => {
        setOpenLoginModal(false)
    }
    const handleOpenLoginModal = () => {
        setOpenLoginModal(true)
    }
    const handleLogout = ()=> {
        localStorage.removeItem("authToken")
        navigate("/")
        window.location.reload()
    }
    return (
        <div className={style['container']}>
            <LoginModal open={openLoginModal} handleClose={handleCloseLoginModal} />
            <h4 id={style['heading']}><Link to={"/"} style={{textDecoration:"none",color:"white"}}>DigitalBazaar</Link></h4>
            
            <input type="text" name="search" id={style['search']} placeholder="Search for products, brands and more" />
            {!isAuthenticated?<button onClick={handleOpenLoginModal} id={style['logoutBtn']}>Login</button>:
            <div className={style['user']}>
                <h6 id={style['username-heading']}>{user?.user?.username}</h6>
                <div className={style['user-list-items']}>
                    <ul>
                        <li><Link style={{"textDecoration":"none","color":"black"}} to={"/myorders"}><img className={style['drop-down-icons']} src={ordericon}/>Orders</Link></li>
                        <hr style={{marginRight:"17px"}}/>
                        <li onClick={handleLogout}><img className={style['drop-down-icons']} src={logouticon} alt=""/>Logout</li>
                    </ul>
                </div>
            </div>
            }   
            <Link className={style['links']}><img className={style['nav-icons']} src={notificationIcon} alt="" />Notification</Link>
            <Link to={"/cart"} className={style['links']}><img className={style['nav-icons']} src={cartIcon} alt="" />Cart</Link>
        </div>
    )
}
