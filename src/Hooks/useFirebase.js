import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase=()=>{
    const [user,setUser]=useState(null);
    const [authError,setAuthError]=useState('');
    const [loading,setLoading]=useState(true);
    const [admin,setAdmin]=useState(false);
    const [token,setToken]=useState('');

     const auth=getAuth();
     const googleProvider=new GoogleAuthProvider;

   const handleRegistration=(email,password,name,navigate)=>{
      setLoading(true);
     createUserWithEmailAndPassword(auth,email,password)
     .then(result=>{
         
         const newUser={displayName:name,email}
         setUser(newUser);
        //  save to db 
        saveUser(name,email,'POST')
         updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
         setAuthError('');

     }).catch(error=>{
         setAuthError(error.message);
     }).finally(()=>{
        setLoading(false);
        navigate('/');
     })
    
   }


   const loginUsingGoogle=(location,navigate)=>{
       setLoading(true);
        signInWithPopup(auth,googleProvider)
        .then(res=>{
            const user=res.user;
            console.log(user)
            saveUser(user.displayName,user.email,'PUT')
            setAuthError('');
            const destination=location?.state?.from || ''
            navigate(destination);
        }).catch(error=>{
            setAuthError(error.message);
        }).finally(()=>{
            setLoading(false);
        })
   }

   const handleLoginUser=(email,password,location,navigate)=>{
       setLoading(true);
       signInWithEmailAndPassword(auth,email,password)
       .then(result=>{
           const user=result.user;
           setUser(user);
           setAuthError('');
           const destination=location?.state?.from || ''
           navigate(destination);
       }).catch(error=>{
        setAuthError(error.message);
       }).finally(()=>{
           setLoading(false)
       })
   }

   useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth,user=>{
         if(user){
            setUser(user);
            getIdToken(user)
            .then(idToken=>{
                setToken(idToken);
            })
         }else{
             setUser(null);
         }
         setLoading(false)
       })
       return ()=> unsubscribe;
   },[])

   const logOut=()=>{
       setLoading(true);
       signOut(auth).then(()=>{
           setUser(null)
           authError('');
       }).catch(error=>authError(error))
       .finally(()=>setLoading(false))
   }

   const saveUser=(displayName,email,method)=>{
       const user={displayName,email}
   fetch('http://localhost:5000/users',{
       method:method,
       headers:{
           'content-type':'application/json'
       },
       body:JSON.stringify(user)
   }).then(res=>res.json())
   .then(data=>{
       console.log(data);
   })
}

useEffect(()=>{
    fetch(`http://localhost:5000/users/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setAdmin(data.admin);
    })
},[user?.email])

return { 
    handleRegistration,logOut,token,user,handleLoginUser,admin,loading,authError,loginUsingGoogle
}

}

export default useFirebase;