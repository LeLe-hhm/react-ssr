import React, { useState } from 'react'

function App(props) {
  const [count, setCount] = useState(1)
  return (
    <div>
      <h2> hellor {props.title}</h2>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        累加器
      </button>
    </div>
  )
}

export default <App title="react-ssr"></App>
