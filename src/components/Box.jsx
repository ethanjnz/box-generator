import React from 'react'

const Box = (props) => {


  return (
    <div className='round shadow border mx-auto d-flex' style={{height: 200, width: 200, backgroundColor: `${props.color}`}}>
    </div>
  )
}

export default Box