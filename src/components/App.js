import React, { useState } from 'react'
import Header from "./Header"
import ListContainer from "./List"

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [list, setList] = useState([])

  return (
    <div className="App">

      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />

      <br/>

      <ListContainer setList={setList} currentUser={currentUser} list={list} />

    </div>
  );
}

export default App;
