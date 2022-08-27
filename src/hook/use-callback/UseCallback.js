import {useState, useCallback} from 'react'
import Content from './Content'

function UseCallback() {
    const [count, setCount] = useState(0)

    /**KHÔNG DÙNG useCallback
     * Khi viết code như bên dưới, memo tại componet content sẽ không có ý nghĩa
     * Lý do:
     * - ban đầu khi component UseCallback được render, nó sẽ tạo ra một function handleIncrease và lưu vào bộ nhớ với địa chỉ A
     * - Khi click button "Increase", do state Count thay đổi, do đó hàm UseCallback() sẽ được chạy lại,
     *  nó tiếp tục tạo ra một function handleIncrease và lưu vào địa chỉ B
     * - Memo so sánh hai function, thấy địa chỉ khác nhau nên sẽ coi rằng prop onIncrease bị thay đổi => re-render lại component Content
     */
    // const handleIncrease = () => {
    //     setCount(count +1)
    // }



    //**KHI DÙNG UseCallback */
    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    /**
     * - useCallback hoạt động tương tự như useEffect 
     * - useEffect nhận tham số đầu tiên là một callback, đối số thứ 2 là dependency
     * - Khi dependency là [], useCallback sẽ chỉ tạo ra duy nhất một instance của callback
     *      Do đó khi memo so sánh prop, địa chỉ cùng chỉ về một vùng của bộ nhớ => memo sẽ không re-render lại component
     */

    return(
        <>
            <h1>{count}</h1>
            <Content onIncrease = {handleIncrease}/>
        </>
    )
}

export default UseCallback