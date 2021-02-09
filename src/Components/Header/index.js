import React from 'react';
import './style.css';
import Search from '../../Assets/img/search.png'
import Photo from '../../Assets/img/photo.png'
import Notification from '../../Assets/img/new.png'



export default function  Header (props){
  const token = JSON.parse(localStorage.getItem("data"));
console.log(token)
const {name} = token.user.roleGroup
      return(
        <div className='header'>
            <div></div>
            <div className=''>
                {/* <img src={Search} alt="" />
                // <img src={Notification} alt="" />*/}
                <span className='divider'>|</span> 
                <span >{name}</span>
                <img src={Photo} alt="" />
            </div>
        </div>
      );
  
}