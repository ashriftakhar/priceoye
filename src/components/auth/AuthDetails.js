import { onAuthStateChanged, signOut } from 'firebase/auth';
import React from 'react'
import { useState, useEffect } from 'react'
import { auth } from '../../Firebase/Firebase';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(false);

    useEffect(()=>{
         const listen = onAuthStateChanged(auth, (user) =>{
            if(user){
                setAuthUser(user);
            }else{
                setAuthUser(null)
           }
          
         });
         return () =>{
            listen();
         }
    }, [])

     const userSignOut = ()=>{
        signOut(auth).then(()=>{
            console.log("signout successful")
        }).catch((error)=>{
            console.log(error)
        })
     }

  return (
    <div>{authUser ? <><p>{authUser.email}</p> <button>Sign out</button> </>: <p>signedout</p>}</div>
  )
}

export default AuthDetails