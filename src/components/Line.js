import React, { useEffect, useState } from 'react'
import SignOut from './SignOut'
import { db, auth } from "../firebase.js";
import SendMessage from './SendMessage.js';


function Line() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    db.collection('messages')
      .orderBy('createdAt')
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map(doc => doc.data()))
      })
  }, [])

  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoERL, uid}) => (
          <div> 
            <div ke={id}>
              <img src={photoERL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  )
}

export default Line