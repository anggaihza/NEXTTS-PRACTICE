"use client"
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import React, { useEffect, useState } from 'react'
import {increment, decrement, reset} from "../redux/slices/counterSlice"

type Counterprops = {
    initialValue: number
}

const Counter: React.FC<Counterprops> = ({initialValue}) => {
    const [count, setCount] = useState<number>(initialValue)

    // const increment = () => {
    //     setCount(count + 1)
    // }


    // const decrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault()        
    //     if(count <= 0) return
    //     setCount(prev => prev - 1)
    // }

    useEffect(() => {
        document.title =  `Count ${count}`
    }, [count])

    const count2 = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch()

  return (
    <>
        {/* <div>Counter {count}</div> */}
        <div>Counter {count2}</div>
        {/* <button onClick={increment}>Increment</button> */}
        {/* <button onClick={(e) => decrement(e)}>Decrement</button> */}

        <button onClick={() => dispatch(increment())}>Increment dispatch</button>
        <button onClick={() => dispatch(decrement())}>Decrement dispatch</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  )
}

export default Counter