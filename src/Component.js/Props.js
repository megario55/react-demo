import React from 'react'

function Props(Props) {
  return (
    <div className="content">
      <div>
        <h1>{Props.name}</h1>
        <img src={Props.img}  width="200px" height="200px"/>
        <p>{Props.des}</p>
      </div>
     
    </div>
  )
}

export default Props
