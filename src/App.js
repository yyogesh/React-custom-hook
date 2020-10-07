import React from 'react';
import './App.css';
import useCount from './hooks/useCount';
import useFetch from './hooks/useFetch';
import useOrderCountHook from './hooks/useOrderCountHook';
import UseFetchExample from './components/UseFetchExample';


function App() {
  const orderHook = useOrderCountHook();
  const { count, increment, decrement, increaseBy, decreaseBy } = useCount();
  const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts');
  console.log(data, error, isLoading)
  return (
    <div className="App">
      <h1>count:{orderHook.orderCount.count}</h1>
      <button type='button' onClick={orderHook.changeOrderCount}>Increment</button>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={() => increaseBy(20)}>increase by 20</button>
      <button onClick={() => decreaseBy(20)}>decrease by 20</button>
      <UseFetchExample />
    </div>
  );
}

export default App;
