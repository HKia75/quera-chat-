import React, { useState } from 'react'
import MessageForm from '../components/MessageForm/MessageForm'
import MessageList from '../components/MessageList/MessageList'
import './App.css'

function App() {
  const [messages, setMessages] = useState([])

  const onMessageSend = (message, me) => {
    setMessages((messages) => [...messages, { me: me, body: message }])
  }

  return (
    <div className="App">
      <MessageList messages={messages} />
      <MessageForm onMessageSend={onMessageSend} />
    </div>
  )
}

export default App
