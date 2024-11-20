import React,{useEffect ,useState} from 'react'

const CountdownTimer = () => {
    let [count, setCount] = useState(60);
    useEffect(() => {
    let run = setInterval(() => {
        setCount(Count => Count + 1);
    }, 1000);
    
        return () => clearInterval(run); 
}, [count]);

const btn = () => {
        setCount(0);
      };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button className='bg-red-400 mt-10' onClick={btn}>Reset Counter</button>
    </div>
  )
}

export default CountdownTimer
