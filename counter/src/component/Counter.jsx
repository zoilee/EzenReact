import React,{useState, useEffect} from 'react'

const Counter = () => {
  //초기 렌더링 counter 세팅
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('num');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  

  //button
  const incCount = () =>{
    setCount(count + 1);
  }
  const decCount = () =>{
    if(count > 0){setCount(count - 1);}
    
  }
  const clearCount = () =>{
    setCount(0);
    localStorage.removeItem('num')
  }

  //counsole 및 localStorage값 저장
  useEffect(()=>{
      console.log("카운터값이 업데이트 되었습니다.");
      localStorage.setItem('num', count);
  }, [count]);

  return (
    <>
      <div>Counter : {count}
        <br/>
        <button onClick={decCount}>-</button>
        <button onClick={incCount}>+</button>
        <button onClick={clearCount}>clear</button>
      </div>   
    </>
  )
}

export default Counter