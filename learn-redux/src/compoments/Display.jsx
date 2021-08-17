import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, login } from "../actions"

const Display = () => {
  const counter = useSelector(state => state.counter)
  const islogged = useSelector(state => state.islogged)
  const dispatch = useDispatch()
  return (
    <div>
      <h4>Counter {counter}</h4>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
      </div>
      <button onClick={() => dispatch(login())}>log in</button>
      {islogged && <h4>Valuable info should not be seen unless logged in</h4>}
    </div>
  )
}

export default Display