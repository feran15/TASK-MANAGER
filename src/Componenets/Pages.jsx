import React from 'react'
import Nav from './Nav'
import Homepage from './Homepage'
import Mid from './Mid'
import Timeline from './Timeline';
import Organize from './Organize';
import LowerMid from './LowerMid';
import Footer from './Footer';
const Pages = () => {
  return (
    <div>
       <Nav />
       <Homepage /> 
       <Mid /> 
       <Timeline/> 
         <Organize/> 
         < LowerMid/>
         <Footer/> 
    </div>
  )
}

export default Pages
