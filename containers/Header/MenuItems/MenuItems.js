import React from 'react';
import './MenuItems.css';
import MenuItem from './MenuItem/MenuItem';
const MenuItems = ()=>{
    return(
        <ul className="MenuItems">
            <MenuItem link="/">
                صفحه اصلی
            </MenuItem>
            <MenuItem link={{
                pathname:"/add-student",
                search:"?sort=name",
                hash:"#the-hash",
                state:{fromDashboard:true}
            }} >
                اضافه کردن دانش آموز
            </MenuItem>
            <MenuItem link="/transition">
            CSS TRANSITION
            </MenuItem>
            <MenuItem link="/animation">
                ANIMATION
            </MenuItem>
            <MenuItem link="/reactjs+csstransition">
            reactjs + csstransition
            </MenuItem>
            <MenuItem link="/reactjs+cssanimation">
            reactjs + cssanimation
            </MenuItem>
        </ul>
    )
}
export default MenuItems