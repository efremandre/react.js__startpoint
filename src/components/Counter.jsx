import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleSetCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1 onClick={handleSetCount}>Hello {count}</h1>
        </div>
    );
};

export default Counter;
