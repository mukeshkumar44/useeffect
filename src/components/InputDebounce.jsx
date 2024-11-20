import React,{useEffect ,useState} from 'react'

const InputDebounce = () => {
    let [value, setValue] = useState('');
    let [deboValue, setDValue] = useState(value);
  
    useEffect(() => {
      let ram = setTimeout(() => {
        setDValue(value);
      }, 500);
  
      return () => {
        clearTimeout(ram); 
      };
    }, [value]);
  
    useEffect(() => {
      if (deboValue) {
        console.log(deboValue); 
      }
    }, [deboValue]);
  
    const btn = (e) => {
      setValue(e.target.value); 
    };
  return (
    <div>
        <input className='mt-32 border-4'
        type="text"
        value={value}
        onChange={btn}
        placeholder="Type something..."
      />
      
    </div>
  )
}

export default InputDebounce
