import React, { useState } from 'react'

function ListCard({item}) {

  const [complete, setComplete] = useState(false)

  const handleClick = () => setComplete(prev => !prev)

  return (
    <p className="item-card" onClick={handleClick}>[{complete ? "✓" : " "}] {item.content}</p>
  )

}

export default ListCard
