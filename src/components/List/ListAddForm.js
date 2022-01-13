import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

function ListAddForm({setList}) {

  const [input, setInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    setList(prevList => [
      ...prevList,
      {id: uuid(), content: input}
    ])

    setInput('')
  }

  const handleInputChange = e => {
    setInput(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>

      <input type="text"
      onChange={handleInputChange}
      value={input}
      />

      <input type="submit"
      value="Add Item"
      />

    </form>
  )

}

export default ListAddForm
