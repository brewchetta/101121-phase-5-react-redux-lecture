import React from 'react'
import ListItems from "./ListItems"
import ListAddForm from "./ListAddForm"
import { useSelector } from 'react-redux'

function ListContainer() {

  const currentUser = useSelector(state => state.user)

  // useSelector --> get state

  return (
    <div id="list-container">

      {currentUser ? <ListItems  /> : <p>Sign in to see the list!</p>}

      {currentUser ? <ListAddForm /> : null}

    </div>
  )

}

export default ListContainer
