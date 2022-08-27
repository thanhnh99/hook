import {useState,
        useEffect} from 'react'

/**
 * Clean up function luôn được gọi trước khi component unmounted
 * Clean up function luôn được gọi trước khi callback được gọi (trừ lần component mounted)
 */
function Avatar() {

    const [avatar, setAvatar] = useState()

    useEffect(() => {
        console.log('run callback')
        //clean up
        return () => {
            console.log('avatar will be remove: ', avatar && avatar.preview)
            console.log('run clean up')
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handleChangeAvatar = (e) => {

        const file = e.target.files[0];
        console.log('run handleChangeAvatar')
        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }
    console.log('re-render')
    console.log('avatar: ', avatar && avatar.preview)
    return (
        <div>
            <input
                type = "file"
                onChange={handleChangeAvatar}
            />
            {console.log('mounted')}
            { avatar && (
                <img src = {avatar.preview} alt = "" width="30%"/>
            )}
        </div>
    )
}

export default Avatar