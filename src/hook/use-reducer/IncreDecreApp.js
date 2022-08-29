import { useReducer } from "react"

/**
 * useState
 * 1. initState: 0
 * 2. Action: Up (state + 1) / Down (state -1)
 */



/**
 * useReducer
 * 1. initState: 0
 * 2. Action: Up (state + 1) / Down (state -1)
 * 3. Reducer
 * 4. dispatch
 */
function IncreDecreApp() {

    const initalState = 0
    const DOWN_ACTION = 'down'
    const UP_ACTION = 'up'

    const reducer = (state, action) => {
        switch (action) {
            case UP_ACTION:
                return state +1
            case DOWN_ACTION:
                return state -1
            default:
                throw new Error('Invalid action')
        }
    }

    const [count, dispatch] = useReducer(reducer, initalState)
    return (
        <div style={{ padding: '10px 32px'}}>
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>-</button>
            <button onClick={() => dispatch(UP_ACTION)}>+</button>
        </div>
    )

}

export default IncreDecreApp;