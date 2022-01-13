import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/actions'

function HeaderUserSignIn() {

  const [fieldInput, setFieldInput] = useState('')

  const dispatch = useDispatch()

  // dispatch --> set state

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addUser({name: fieldInput}))
  }

  return (
    <form onSubmit={handleSubmit}>

      <input type="text"
      onChange={e => setFieldInput(e.target.value)}
      value={fieldInput}
      />

      <input type="submit"
      value="Sign In"
      />

    </form>
  )

}

export default HeaderUserSignIn
