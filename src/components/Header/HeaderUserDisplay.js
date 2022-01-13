import React from 'react'
import HeaderUserSignIn from "./HeaderUserSignIn"

function HeaderUserDisplay({currentUser, setCurrentUser}) {

  return (
    <div id="header-user-display">

      { currentUser
        ? <span>{currentUser.name} is Signed In</span>
        : <HeaderUserSignIn setCurrentUser={setCurrentUser} />
      }

    </div>
  )

}

export default HeaderUserDisplay
