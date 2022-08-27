import { memo } from "react"


function Content ({onIncrease}) {
    console.log('re-render Content')
    return (
        <>
            <h1>Hello ae F8</h1>
            <button onClick = {onIncrease}>Increase</button>
        </>
    )
}

//not use memo
// export default Content

//use memo
export default memo(Content)