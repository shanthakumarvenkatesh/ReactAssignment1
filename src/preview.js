import React, { useState } from 'react'
import ClassComponent from './ClassComponent'
import Functional from './Functional'
import "./components/Style.css"



const Preview = () => {

const [name,SetName]=useState(false)

const [name2,SetName2]=useState(false)


  return (
  <>
  
  
  <h1>Styling using Fuctional and ClassComponent</h1>

  <button className='but1' onClick={()=>{name?SetName(false):SetName(true)}}>To see styling in functional component</button>
  {name&&<Functional />}

  <button className='but2' onClick={()=>{name2?SetName2(false):SetName2(true)}}>To see styling in class component</button>
  
  
  {name2&&<ClassComponent />}



  </>

  )
}

export default Preview
