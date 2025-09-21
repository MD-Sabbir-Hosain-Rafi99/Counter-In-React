import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const plusHandle = () => {
        const increse = count + 1;
        setCount(increse);
    }

    const minusHandle = () => {
        const minus = count - 1;
        if (minus !== -1) {
            setCount(minus);
        }
        
    }

    const resetHandle = () => {
        const resetBtn = 0;
        setCount(resetBtn)
    }

    return (
        <div className="">
            <h2>Count : {count}</h2>
            <button onClick={plusHandle}>+</button>
            <button onClick={minusHandle}>-</button>
            <button onClick={resetHandle}>Reset</button>
        </div>
    )
}