'use client'
import { createContext,useContext, useEffect, useState  } from "react";

const UserContext=createContext()

export const UserProvider=({children})=>{
    const [userData, setUserData] = useState(null);
    const requestURL='https://api.github.com/users/TenzDelek'
        useEffect(()=>{
          const fetchData =async()=>{
            try {
              const res=await fetch(requestURL)
              if(res.ok){
                console.log("fine")
                const data=await res.json()
                setUserData(data)
              }
              else {
                console.error('Error fetching data:', response.statusText);
              }
            } catch (error) {
              console.error('Error fetching data:', error.message);
            }
          }
          fetchData()
        }
        ,[])
        return (
            <UserContext.Provider value={userData}>
              {children}
            </UserContext.Provider>
          );
}

export const useUser = () => {
    return useContext(UserContext);
  };