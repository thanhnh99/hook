import {useReducer} from 'react'

const initalState = {
    job: '',
    jobs: []
}
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const REMOVE_JOB = 'remove_job'

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload
    }
}

const removeJob = (payload) => {
    return {
        type: REMOVE_JOB,
        payload
    }
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case REMOVE_JOB:
            return {
                ...state,
                job: action.payload
            }
        default:
            throw new Error('invalid action')
    }
}


function TodoApp() {

    const [state, dispatch] = useReducer(reducer, initalState)
    return (
        <div style={{padding: '10px 32px'}}>
            <div className="form">
                <input 
                    value={state.job}
                    onChange = {(e) => dispatch(setJob(e.target.value))}
                />
                <button
                    onClick={(e) => dispatch(addJob(state.job))}    
                >
                    ADD
                </button>
            </div>

            <ul>
                {state.jobs.map((job, index) => (<li key={index}>{job}</li>))}
            </ul>
        </div>
    )
}

export default TodoApp