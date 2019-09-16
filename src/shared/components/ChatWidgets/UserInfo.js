import React, { useState, useEffect } from 'react';
import './UserInfo.css';


function UserInfo({user = "default user"}) {
    const [seconds, setSeconds] = useState(0);
    const userArr = user.toLowerCase().split(" ");
    const fname = userArr[0].charAt(0).toUpperCase() + userArr[0].slice(1);
    const lname = userArr.length>1 ? userArr[1].charAt(0).toUpperCase() + userArr[1].slice(1) : "";
    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        }, 1000);
    return () => clearInterval(interval);
      }, [seconds]);
    return (
        <div className="userContainer">
            <div className="userName">
                {`${fname} ${lname}`}
            </div>
            <div className="userOnlineText">
                {`Online for ${Math.floor(seconds/5)} minutes`} {/*using 5 sec as minutes to demo*/}
            </div>
        </div>
    )
}

export default UserInfo;
