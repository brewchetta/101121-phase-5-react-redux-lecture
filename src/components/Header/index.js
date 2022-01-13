import React from 'react'
import HeaderUserDisplay from "./HeaderUserDisplay"

function Header({currentUser, setCurrentUser}) {

  return (
    <div id="header">

      <h1>Welcome to Flatalistr!</h1>

      <HeaderUserDisplay currentUser={currentUser} setCurrentUser={setCurrentUser} />

    </div>
  )

}

export default Header
