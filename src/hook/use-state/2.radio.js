import {useState}  from 'react'

function Radio() {
    const courses = [
        {
            id: 1,
            name: 'JavaScript'
        },
        {
            id: 2,
            name: 'HTML && CSS'
        },
        {
            id: 3,
            name: "JAVA"
        },
        {
            id: 4,
            name: 'PHP && Laravel'
        }

    ]

    const [checked, setChecked] = useState()

    function handleClick(){
        console.log('Register: ', checked)
    }

    return(
        <div className='course-list'>
            {courses.map(course => (
                <div key = {course.id}>
                    <input 
                        type = 'radio'
                        checked={course.id === checked}
                        onChange={()=> setChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}

            <button onClick={handleClick}>Register</button>
        </div>
    )

}

export default Radio
