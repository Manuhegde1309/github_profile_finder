/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Card.css'
const Card = ({Card}) => {
  
  return (
  <>
    <table className="ui red table">
  <thead>
    <tr><th>Name</th>
    <th>logo/profile picture</th>
    <th>followers</th>
    <th>following</th>
    <th>number of public repos</th>
    <th>repos</th>
  </tr></thead><tbody>
    <tr>
      <td>{Card.login}</td>
      <td><img src={Card.avatar_url?Card.avatar_url:""} alt="pic" className="ui avatar image"/></td>
      <td>{Card.followers}</td>
      <td>{Card.following}</td>
      <td>{Card.public_repos? Card.public_repos:"N/A"}</td>
      <td><a href={Card.html_url} target="_blank" rel="noopener noreferrer" >View</a></td>
    </tr>
    </tbody>
  </table>


  </>
  )
  
}

export default Card