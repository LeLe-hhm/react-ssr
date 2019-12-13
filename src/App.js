import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Index from './views/index'
import Mine from './views/mine'

import { createMemoryHistory } from 'history'

const history = createMemoryHistory()

// function App(props) {
//   //   const [count, setCount] = useState(1)
//   return (
//     <div>
//       <Route path="/" exact componet={Index}></Route>
//       <Route path="/mine" exact componet={Mine}></Route>
//       {/* <h2> hellor {props.title}</h2>
//                   <h3>{count}</h3>
//                   <button
//                     onClick={() => {
//                       setCount(count + 1)
//                     }}
//                   >
//                     累加器
//                   </button> */}
//     </div>
//   )
// }

// export default <App title="react-ssr"> </App>
export default (
  <div>
    <Route path="/" exact component={Index}></Route>
    <Route path="/mine" exact component={Mine}></Route>
  </div>
)
