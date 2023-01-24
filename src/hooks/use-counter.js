import { useState, useEffect } from 'react'




const UseCounter = (initialCount) => {

    const [count, setCount] = useState(initialCount)

    useEffect(() => {
        console.log('refresh and, ', count)
    }, [count])

    const incrimentCount = () => {
        setCount(count + 1)
    }

    const decrimentCount = () => {
        setCount(count - 1)
    }

    const clearCount = () => {
        setCount(0)
    }

    return {
        incrimentCount,
        decrimentCount,
        clearCount,
        count
    }
}


export default UseCounter