import React from 'react'
import ListItems from "./ListItems"
import ListAddForm from "./ListAddForm"

function ListContainer({currentUser, list, setList}) {

  return (
    <div id="list-container">

      {currentUser ? <ListItems list={list} setList={setList} /> : <p>Sign in to see the list!</p>}

      {currentUser ? <ListAddForm setList={setList} /> : null}

    </div>
  )

}

export default ListContainer
