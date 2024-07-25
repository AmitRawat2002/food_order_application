import React, { useState } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
    const[category,setcategory] = useState("All");
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Explore our menu which is different from other in which many item included.our mission is to satisfy your craving and elevate your dining experince, one delicious meal at a time</p>
        <div className="menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>
                    </div>
                    
                    

                )
            })}
        </div>
        <hr />
        

    </div>
  )
}

export default ExploreMenu