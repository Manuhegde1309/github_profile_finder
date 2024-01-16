/* eslint-disable no-unused-vars */

import React, {  useState } from 'react'
import Card from './Card'


const Component = () => {
  const [username,setUsername] = useState("")
  
  const [Data,setData] = useState({})
  const [repo,setrepo]=useState([])
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(`https://api.github.com/users/${username}`)
    const res2=await fetch (`https://api.github.com/search/repositories?q=user:${username}`)
    const data = await res.json();
    const wholeRepo=await res2.json();
    const repo=wholeRepo["items"]
    console.log(repo)
    console.log(data)
    if (data){
      setData(data)
      setrepo(repo)
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
      {<Card Card={Data} repos={repo}/>}
    
    </>
  )
}

export default Component
