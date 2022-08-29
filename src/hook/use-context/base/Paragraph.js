import {ThemeContext} from './ThemeContext'
import { useContext } from 'react'
function Paragraph() {
    const context = useContext(ThemeContext)
    return (
        <div className={context.theme}>
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
        </div>
    )
}

export default Paragraph