import React from 'react'

const BlankService = () => {
  return(
    <h1>상품이 없어용</h1>
  )
}

const Service = () => {
  return (
    <h1>상품이 있어용</h1>
  )
}

const Servicies = ({isService}) => {
  return (
    <div>
      {
        isService?<Service/>:<BlankService/>
      }
    </div>
  )
}

export default Servicies