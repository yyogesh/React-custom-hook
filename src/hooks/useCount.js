import { useState } from 'react';

const useCount = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const increaseBy = (increaser) => setCount(count + increaser);
    const decreaseBy = (decreaser) => setCount(count + decreaser);

    return { count, increment, decrement, increaseBy, decreaseBy };
};

export default useCount