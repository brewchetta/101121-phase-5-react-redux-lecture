import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useDispatch } from 'react-redux'

function ListAddForm() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()

    dispatch({
      type: "addListItem",
      payload: {
        id: uuid(),
        content: input
      }
    })

    // dispatch({type: payload: input})
    // setList(prevList => [
    //   ...prevList,
    //   {id: uuid(), content: input}
    // ])

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
