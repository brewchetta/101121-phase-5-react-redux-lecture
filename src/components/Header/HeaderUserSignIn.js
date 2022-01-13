import React, { useState } from 'react'

function HeaderUserSignIn({setCurrentUser}) {

  const [fieldInput, setFieldInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setCurrentUser({name: fieldInput})
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
