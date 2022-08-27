import {useState, useMemo, useRef} from 'react'


function UseMemo() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
                            name,
                            price: parseInt(price)
                        }])
        setName('')
        setPrice('')
        nameRef.current.focus();
    }

    /**
     * Nếu viết như bên dưới, mỗi lần nhập vào input, component re-render lại thì total lại phải tính lại
     * Đúng ra thì phải nhấn nút add thì mới tính lại total
     */
    // const total = products.reduce((total, current) => {
    //                     console.log("Tính toán lại!!!!!")
    //                     return total + current.price
    //                 }, 0)



    /**
     * - UseMemo giúp tránh thực hiện lại một logic không cần thiết
     * - useMemo hoạt động tương tự như useEffect 
     * - useEffect nhận tham số đầu tiên là một callback, đối số thứ 2 là dependency
     */
    const total = useMemo(() => {
                                const total = products.reduce((total, current) => {
                                    console.log("Tính toán lại!!!!!")
                                    return total + current.price
                                }, 0)
                                return total
                        }, [products])

    return (
        <div style={{padding: '10px 32px'}}>
            <input
                ref={nameRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={"Enter name"}
            />

            <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder={"Enter price"}
            />

            <button onClick = {handleSubmit}>Add</button>

            Total: {total}

            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseMemo