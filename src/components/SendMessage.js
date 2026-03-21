import { Input } from '@mui/material'
import React from 'react'
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";

function SendMessage() {
    const [message, setMessage] = React.useState('')

    function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        db.collection('messages').add({
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input
                        style={{
                            width: "78%",
                            fontSize: "15px",
                            fontWeight: "550",
                            marginLeft: "5px",
                            marginBottom: "-3px",
                        }}
                        placehoder="メッセージを入力"
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default SendMessage

// Dbに届かない