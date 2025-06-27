import { useState } from "react"
import "./App.css"
export default function Counter() {
    const [countervariable, setCountervariable] = useState(0);
    function increase() {
        if (countervariable < 100) {
            setCountervariable(countervariable + 1);
        }
    }
    function decrease() {
        if (countervariable > 0) {
            setCountervariable(countervariable - 1);
        }
    }
    return (
        <div className="app-container">
            <h1>Increase or decrease the values easily</h1>
            <h3>{countervariable}</h3>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}