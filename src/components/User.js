import { useState } from "react";

const User=(props)=>{

    const [count,setcount]=useState(0);

    const {name}=props;
    return(
        <div className="user-card">
            <h1>Count ={count}</h1>
            <h2>{name}</h2>
            <h3>Location: Delhi</h3>
            <h3>Contact: @avimanchanda</h3>
        </div>
    )
};

export default User;