'use client'
import React, { use, useState } from 'react'

export default function ProfilePage() {
    type User = {
        name: string,
        email: string
    } | null

    const [user, setUser] = useState<User>(null)

    const login = () => {
        setUser({name: 'Tiwul', email: 'tiwul@gmail.com'})
    }

    const logout = () => {
        setUser(null)
    }
  return (
    <>
        {user ? (
            <div>
                <p>Welcome</p>
                <div>Name {user.name}</div>
                <div>Email {user.email}</div>
                <button onClick={logout}>Logout</button>
            </div>
        ) : (
            <div>
                <button onClick={login}>Login</button>
            </div>
        )}
    </>
  )
}
