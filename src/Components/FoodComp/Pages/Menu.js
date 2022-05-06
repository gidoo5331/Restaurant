import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import JumboText from '../Navbar/JumboText'

const Menu = () => {
  return (
    <div>
        <JumboText 
    top="ENJOY THE VIEW"
    title="Our Menus" 
    text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. "/>
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
        <div className='container-fluid' style={{padding: "3% 8%"}}>
          <Outlet/>
        </div>
    </div>
  )
}

export default Menu