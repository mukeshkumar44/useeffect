import React,{useEffect ,useState} from 'react'

const DependentState = () => {
    const [count, setCount] = useState(0);

    const int = setTimeout(() => {
        setCount(run => run + 1);
    },1000);
    
    
    useEffect(() => {
        return () => clearTimeout(int);
  }, [count]);

  const btn = () => {
    setCount(0);
  };

  return (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={btn}>Reset Counter</button>
  </div>
  )
}

export default DependentState
