/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import Card from './Card'

const Component = () => {
  const [username,setUsername] = useState("")
  const [Data,setData] = useState({})
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json();
    
    if (data){
      setData(data)
    }

    
  }

  
  return (
    <>
      <div className="ui right labeled input">
        <input 
        type='text' 
        name="username"
        placeholder='enter your username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}        
        />
        <button className="ui primary button" onClick={handleSubmit}>Search</button>

      </div>
      {<Card Card={Data}/>}
    </>
  )
}

export default Component