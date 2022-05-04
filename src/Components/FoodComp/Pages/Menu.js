import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <nav className="navbar d-flex justify-content-between navbar-expand-lg menu-nav">
            <NavLink className="nav-link navL ms-3" to='breakfast'>Breakfast</NavLink>  
            <NavLink className="nav-link navL " to='lunch'>Lunch</NavLink>  
            <NavLink className="nav-link navL " to='dinner'>Dinner</NavLink>
            <NavLink className="nav-link navL " to='desserts'>Desserts</NavLink>
            <NavLink className="nav-link navL " to='drinks'>Drinks</NavLink>
            <NavLink className="nav-link navL " to='wine'>Wine</NavLink>
            {/* <NavLink className="nav-link navL " to='culture'>Culture</NavLink> */}
            {/* <Link className="p-2 text-muted" to='category/travel'>Travel</Link> */}
        </nav>
        <Outlet/>
    </div>
  )
}

export default Menu