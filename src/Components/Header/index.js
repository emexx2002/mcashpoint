import React from 'react';
import './style.css';
import Search from '../../Assets/img/search.png'
import Photo from '../../Assets/img/photo.png'
import Notification from '../../Assets/img/new.png'



export default function  Header (props){
      return(
        <div className='header'>
            <div></div>
            <div className=''>
                <img src={Search} alt="" />
                <img src={Notification} alt="" />
                <span className='divider'>|</span>
                <span >Ebun Oguntibeju</span>
                <img src={Photo} alt="" />
            </div>
        </div>
      );
  
}