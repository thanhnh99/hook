import {useState} from 'react'

function UseState() {
/** Counter Start */
    let [counter, setCounter] = useState(1)

    function increment() {
        // console.log('counter 1: ', counter)
        // setCounter(counter + 1)
        // counter += 5 // ảnh hưởng đến các setState phía sau
        // console.log('counter 2: ', counter)
        // setCounter(counter + 1)
        // console.log('counter 3: ', counter)
        // setCounter(counter + 1)
        // console.log('counter 4: ', counter)
        // ==> Từ lần render thứ 2, counter = counter + 6


        /**
         * Khi dùng callback trong setCounter, giá trị của state sẽ được update theo từng hàm setState, 
         * prevState là giá trị trả về của callback trong setState trước đó
         */
        console.log('counter 1: ', counter)
        setCounter(prevState => prevState + 1)
        counter += 5 //không ảnh hưởng đến các setState phía sau
        console.log('counter 2: ', counter)
        setCounter(prevState => prevState + 1)
        console.log('counter 3: ', counter)
        setCounter(prevState => prevState + 1)
        console.log('counter 4: ', counter)
        // ==> Từ lần render thứ 2, counter = counter + 3
    }

    function decrement() {
        setCounter(counter-1)
    }

    console.log('re-render')

    return (
        <div className="App" style={{ padding: 20}}>
            <h1>{counter}</h1>
            <button onClick={() => decrement()}>-</button>
            <button onClick={() => increment()}>+</button>
        </div>
    );

/** Counter end */
}

export default UseState;