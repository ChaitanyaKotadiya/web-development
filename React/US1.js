import { useState } from "react";
import React.{ useState } from "react";
function US1() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleCount}>
                Click me
            </button>
        </div>
    );
}
export default US1