import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getIndexList } from '../store/index'
function Index(props) {
  const [count, setCount] = useState(1)
  useEffect(() => {
    props.getIndexList()
  }, [])
  return (
    <div>
      {/* <h2> hellor {props.title}</h2>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        累加器
      </button> */}
      <ul>
        {props.list.map(item => {
          return (
            <li key={item.age}>
              {item.name}
              {item.age}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default connect(
  state => ({ list: state.index.list }),
  { getIndexList }
)(Index)
