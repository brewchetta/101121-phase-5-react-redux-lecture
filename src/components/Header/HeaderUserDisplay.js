import React from 'react'
import HeaderUserSignIn from "./HeaderUserSignIn"
import { useSelector } from 'react-redux'

function HeaderUserDisplay() {

  const currentUser = useSelector(state => state.user)

  console.log('currentUser', currentUser);

  return (
    <div id="header-user-display">

      { currentUser
        ? <span>{currentUser.name} is Signed In</span>
        : <HeaderUserSignIn />
      }

    </div>
  )

}

export default HeaderUserDisplay
