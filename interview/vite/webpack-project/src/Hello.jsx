import React from "react"
import { aMessage } from "./a"
function Hello() {
  return (
    <div>
      <h1>Hello</h1>
      <div>
        {
          aMessage()
        }
      </div>
    </div>
  )
}
export default Hello
