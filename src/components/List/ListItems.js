import React from 'react'
import ListCard from "./ListCard"

function ListContainer({list}) {

  return (
    <>
      {list.map(item => <ListCard key={item.id} item={item}/>)}
    </>
  )

}

export default ListContainer
