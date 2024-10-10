import React from 'react'



const About = ({cars}) => {
  return (
    <div>
      {cars.map((car, index)=>(
        <h1 key={index}>{car}자동차</h1>
      ))}
    </div>
  )
}

export default About