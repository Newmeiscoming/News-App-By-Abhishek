import React from 'react'
import Entertainment from '../components/Entertainment'
import General from '../components/General'
import Healths from '../components/Healths'
import Sceince from '../components/Sceince'
import Technology from '../components/Technology'
import Sports from '../components/Sports'
import Business from '../components/Business'

const Mainpage = () => {
  return (
    <div>
        
        <General/>
        <Sports/>
        <Entertainment/>
        <Healths/>
        <Sceince/>
        <Technology/>
        <Business/>
    </div>
  )
}

export default Mainpage