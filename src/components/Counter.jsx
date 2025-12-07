import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Reducer/reducer";


export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch=useDispatch()
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={()=>dispatch(increment())}>Incre</button>
      <button onClick={()=>dispatch(decrement())}>Decre</button>
    </div>
  );
}
