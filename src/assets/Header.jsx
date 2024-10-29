import Staye, {useState} from "react"

const Header = () => {
    const {state, setState} = useState("hello")

    const {count, setCount} = useState(9)

    const inc = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>Counter</h2>
        </div>
    )
}