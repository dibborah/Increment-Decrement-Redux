import React from 'react'
import { useDispatch } from 'react-redux'
import  {actionCreators}  from './state/index';

const Shop = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <button onClick = {() => dispatch(actionCreators.withdrawMoney(100))}>-</button>
        Add to value
        <button onClick = {() => dispatch(actionCreators.depositMoney(100))}>+</button>
    </div>
  )
}

export default Shop