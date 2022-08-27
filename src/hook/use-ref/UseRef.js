import {useRef, useState, useEffect} from 'react'

//Lưu các giá trị qua một tham chiếu bên ngoài
//Function component

function UseRef() {
    document.title = 'Đồng hồ đếm ngược'
    const [count, setCount] = useState(60)

    const timerId = useRef()
    const prevCount = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    const handleStart = () => {
        timerId.current = setInterval(() => {
            console.log('Run interval (count: )', count)
            setCount(prevCount => {
                console.log('Previous count: ', prevCount)
                return prevCount - 1
            })
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }

    console.log(count, prevCount.current)

    return (
        <div style = {{padding : 20}}>
            <h1>{count}</h1>
            <button onClick = {handleStart}>Start</button>
             <button onClick = {handleStop}>Stop</button>
        </div>
    )
}

export default UseRef