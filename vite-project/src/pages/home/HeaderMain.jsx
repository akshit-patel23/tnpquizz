import React from 'react'
import HomeLeft from '../../components/homeComponent/HomeLeft'
import Homeright from '../../components/homeComponent/Homeright'
import './HeaderMain.css'
function HeaderMain() {
  return (
    <div className='MainScreen'>
        <HomeLeft/>
        <Homeright/>
    

    </div>
  )
}

export default HeaderMain