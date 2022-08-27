import { memo } from "react"


function Content ({count}) {
    console.log('re-render Content')
    return (
        <>
            <h1>Hello ae F8: {count}</h1>
        </>
    )
}

//not use memo
// export default Content

//use memo
export default memo(Content)