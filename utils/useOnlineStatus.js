import { useEffect, useState } from "react";

const useOnlineStatus=()=>{

    const [onlinestatus, setonlinestaus]=useState(true);

    // Chck if online

    useEffect(()=>{

        window.addEventListener("offline",()=>{
            setonlinestaus(false);
        })

        window.addEventListener("online",()=>{
            setonlinestaus(true)
        });

    },[]);

    // Retun the online status (boolean value)

    return onlinestatus;

}

export default useOnlineStatus;