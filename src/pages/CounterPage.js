//import { useState, useEffect } from 'react'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Panel from '../components/Panel'

import { useEffect, useState } from 'react'

const CounterPage = ({ initialCount }) => {

    // const { incrimentCount, decrimentCount, clearCount, count } = UseCounter(initialCount)
    const [count, setCount] = useState(initialCount)
    const [valueToAdd, setValueToAdd] = useState(0)

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

    const handleChange = (event) => {
        setValueToAdd(parseInt(event.target.value) || 0)
    }

    const handleValueToAdd = (event) => {
        event.preventDefault()

        setCount(count + valueToAdd)
        setValueToAdd(0)

    }


    return <Panel className='m-3'>
        <div className='flex flex-row'>
            <h1 className='text-lg'>count is {count}</h1>
            <Button secondary onClick={incrimentCount}><Icon secondary />1Up</Button>
            <div><Button danger outline onClick={decrimentCount}><Icon danger />1Down</Button></div>
            <div><Button warning onClick={clearCount}><Icon warning />Clear</Button></div>
        </div>
        <form onSubmit={handleValueToAdd}>
            <label>Add a fawk ton</label>
            <input
                value={valueToAdd || ""}
                onChange={handleChange}
                type="number"
                className='p-1 m-3 bg-gray-50 border border-gray-300' />
            <Button>Add it</Button>
        </form>

    </Panel>
}


export default CounterPage