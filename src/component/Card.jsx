/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'semantic-ui-css/semantic.min.css'

const Card = ({Card,repos}) => {
  
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
      <td>{
        repos.map(repo=>(
            <p key={repo.id}><a href={repo.url} target="_blank" rel="noreferrer">{repo.name}</a></p>
        ))
        }</td>
    </tr>
    </tbody>
  </table>


  </>
  )



  
}
//
export default Card