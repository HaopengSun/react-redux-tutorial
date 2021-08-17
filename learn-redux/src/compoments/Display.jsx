import React from "react"
import { useSelector } from "react-redux"

const Display = () => {
  const counter = useSelector(state => state.counter)
  return (
    <div>
      <h4>Counter {counter}</h4>
    </div>
  )
}

export default Display