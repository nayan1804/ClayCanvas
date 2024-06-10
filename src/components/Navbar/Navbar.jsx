import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StroreContext';
import { FaCartArrowDown } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";

const Navbar = ({ setShowLogin }) => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate('/');
    }

    return (
        <div className='navbar'>
    
            <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
            <ul className="navbar-menu">
                <a href='#header' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</a>
                <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
                <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                    <Link to='/'><FiSearch  style={{ color: '#49577e', fontSize: '31px' }} /></Link>
                
                <div className="navbar-search-icon">
                    <Link to='/cart'><FaCartArrowDown style={{ color: '#49577e', fontSize: '31px' }} /></Link>
                    <div className={getTotalCartAmount() ? "dot" : ""}></div>
                </div>
                {!token
                    ? <button onClick={() => { setShowLogin(true) }}>Sign in</button>
                    : <div className="navbar-profile">
                        {/* <img src={assets.profile_icon} alt="" /> */}
                        <FaUserAlt style={{ color: '#49577e', fontSize: '26px' }} />
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate('/myorders')}><IoBagCheck style={{ color: '#ff6347', fontSize: '23px' }}/><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><IoLogOut  style={{ color: '#ff6347', fontSize: '23px' }}/><p>Logout</p></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    
        
    )
}

export default Navbar;




// import React, { useContext, useState } from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/assets'
// import { Link, useNavigate } from 'react-router-dom'
// import { StoreContext } from '../../context/StroreContext'

// const Navbar = ({ setShowLogin }) => {

//     const navigate = useNavigate();
//     const [menu, setMenu] = useState("home");
//     const { getTotalCartAmount, token, setToken } = useContext(StoreContext)

//     const logout = () => {
//         localStorage.removeItem("token");
//         setToken("");
//         navigate('/')
//     }

//     return (
//         <div className='navbar'>
//             <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
//             <ul className="navbar-menu">
//                 <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
//                 <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
//                 <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
//                 <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
//             </ul>
//             <div className="navbar-right">
//                 <img src={assets.search_icon} alt="" />
//                 <div className="navbar-search-icon">
//                     <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
//                     <div className={getTotalCartAmount() ? "dot" : ""}></div>
//                 </div>
//                 {!token
//                     ? <button onClick={() => { setShowLogin(true) }}>Sign in</button>
//                     : <div className="navbar-profile">
//                         <img src={assets.profile_icon} alt="" />
//                         <ul className="nav-profile-dropdown">
//                             <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
//                             <hr />
//                             <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
//                         </ul>
//                     </div>
                    
//                 }
//             </div>
//         </div>
//     )
// }

// export default Navbar
