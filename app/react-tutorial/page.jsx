"use client"
import React, {useState} from 'react'

function MyButton() {
    return (<button>Click me</button>)
  }

export default function Page() {

    const [username, setUser] = useState({username:""})

    function handleClick(event) {
        let usernameValue = event.target.value;
        setUser({...username, username: usernameValue})
    }

    return (

    <div>
        <h1>Username : {username.username}</h1>
        <input type="text" placeholder='username' value={username.username} onChange={handleClick}/>
    </div>

    );
}
