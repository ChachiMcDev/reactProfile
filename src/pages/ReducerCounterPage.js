import Button from '../components/Button'
import Icon from '../components/Icon'
import Panel from '../components/Panel'
import { useReducer } from 'react'



const ReducerCounterPage = ({ initialCount }) => {

    const initialState = {
        count: initialCount,
        valueAdd: 0
    }

    const INCREMENT = 'increment'
    const DECREMENT = 'decrement'
    const CLEAR = 'clear'
    const UPDATEVALUEADD = 'updatevalueadd'
    const VALUEADD = 'valueadd'


    const reducer = (state, action) => {

        switch (action.type) {
            case INCREMENT:
                return {
                    ...state,
                    count: state.count + 1
                }
            case DECREMENT:
                return {
                    ...state,
                    count: state.count - 1
                }
            case CLEAR:
                return { count: 0 }
            case UPDATEVALUEADD:
                return {
                    ...state,
                    valueAdd: action.payload
                }
            case VALUEADD:
                return {
                    ...state,
                    count: state.count + state.valueAdd,
                    valueAdd: 0
                }
            default:
                throw new Error('ahh man its broken')
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (event) => {
        event.preventDefault()
        const value = parseInt(event.target.value)
        dispatch({
            type: UPDATEVALUEADD,
            payload: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({ type: VALUEADD })
        event.target.elements[0].value = ''
    }


    return (
        <Panel className='m-3'>
            <div>
                <h1 className='text-lg'>Kickity Count: {state.count}</h1>
                <Button primary onClick={() => dispatch({ type: INCREMENT })}><Icon primary />+1</Button>
                <Button primary onClick={() => dispatch({ type: DECREMENT })}><Icon primary />-1</Button>
                <Button primary onClick={() => dispatch({ type: CLEAR })}><Icon warning />Clear It</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a fawk ton</label>
                <input
                    onChange={handleChange}
                    type="number"
                    className='p-1 m-3 bg-gray-50 border border-gray-300' />
                <Button>Add it</Button>
            </form>
        </Panel>

    )




}

export default ReducerCounterPage