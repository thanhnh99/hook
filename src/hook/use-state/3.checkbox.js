import {useState} from 'react'

function Checkbox() {
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
    
    const [checkedList, setChecked] = useState([])

    function handleClick() {
        console.log('Register: ',checkedList)
    }

    function handleChecked(id) {
        if(checkedList.includes(id)) {
            const checkedNewList = checkedList.filter(checked => checked !== id)
            setChecked(checkedNewList)
        } else {
            setChecked([...checkedList, id])
        }
    }


    return(
        <div className='course-list'>
            {courses.map(course => (
                <div key = {course.id}>
                    <input 
                        type = 'checkbox'
                        checked={checkedList.includes(course.id)}
                        onChange={()=> handleChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}

            <button onClick={handleClick}>Register</button>
        </div>
    )


}

export default Checkbox