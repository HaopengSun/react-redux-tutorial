import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, login } from "../actions"

const Display = () => {
  const counter = useSelector(state => state.counter)
  const islogged = useSelector(state => state.logger)
  const dispatch = useDispatch()
  const button = ['login', 'logout']
  return (
    <div>
      <h4>Counter {counter}</h4>
      <div>
        <button onClick={() => dispatch(increment(2))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <button onClick={() => dispatch(login())}>{islogged ? button[0] : button[1]}</button>
      {islogged && <h4>Valuable info should not be seen unless logged in</h4>}
    </div>
  )
}

export default Display