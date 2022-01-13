import React from 'react'
import ListCard from "./ListCard"
import { useSelector } from 'react-redux'

function ListContainer() {

  const list = useSelector(state => state.list)

  return (
    <>
      {list.map(item => <ListCard key={item.id} item={item}/>)}
    </>
  )

}

export default ListContainer
