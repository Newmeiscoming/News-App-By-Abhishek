import React from 'react'
import Entertainment from '../components/Entertainment'
import General from '../components/General'
import Healths from '../components/Healths'
import Technology from '../components/Technology'
import Sports from '../components/Sports'


const Mainpage = () => {
  return (
    <div>
        
        <General/>
        <Sports/>
        <Entertainment/>
        <Healths/>
        <Technology/>
    </div>
  )
}

export default Mainpage