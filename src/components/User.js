import { useState } from "react";

const User = ({name}) =>{
    const [count] = useState(0);
    const [count1] = useState(7);
    return(
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count 1 = {count1}</h1>
            <h1>Name : {name}</h1>
            <h2>Location : Andhra Pradesh</h2>
        </div>
    )
}

export default User;