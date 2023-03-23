import React from 'react'
import { useDispatch  } from 'react-redux';
import {increment } from "../reducers/counter/counterSlice";



const Header = (props) => {

  let dispatch = useDispatch();
  return(
    <>
       <button onClick={ ()=> dispatch(increment(3) ) } >+</button>
    </>
  );
};


export default Header;