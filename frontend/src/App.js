import { useState, useEffect } from "react"
import "./App.css"
import io from "socket.io-client"
const HOST = "http://localhost:4000"
const socket = io.connect(HOST)


function App() {
  const [response, setResponse] = useState("")

  useEffect(() => {
    socket.on("time", data => {
      setResponse(data)
    })
  }, [])

  return (
    <div class="time">
      <h1>
        Heure : {response}
      </h1>
    </div>
  )
}


export default App