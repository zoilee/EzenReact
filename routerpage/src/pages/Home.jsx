import React from 'react'

const Home = () => {
  const clicks = () => {
    alert('팝업이에여');
  }

  const clicks2 = (a,b) =>{
    alert("a+b= " + (a+b));
  }

  return (
    <div>
      Home
      <br/>
      <button onClick={clicks}>팝업창이 뜨도록 누르십셔.</button>
      <button onClick={() => clicks2(10,20)}>팝업창이 뜨도록 누르십셔.</button>
    </div>
  )
}

export default Home