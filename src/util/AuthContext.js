import React, {useContext, useState, useEffect} from 'react'
import {auth} from './Authentication'





export function AuthContext({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(false)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

   

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
