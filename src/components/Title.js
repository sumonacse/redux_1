import React from 'react'
import { useDispatch  } from 'react-redux';
import { decrement } from "../reducers/counter/counterSlice";

const Title = (props) => {

  let dispatch = useDispatch();
  return (
    <>
        <button onClick={ ()=> dispatch(decrement() ) } >-</button>
    </>
  )
}

export default Title
