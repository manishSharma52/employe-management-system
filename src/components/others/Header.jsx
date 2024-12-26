import React, { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = (props) => {
  // const [username, setUsername] = useState('')
  //   if (!data) {
  //     setUsername('admin')
  //   }else{
  //     setUsername(data.firstName)
  //   }

  const logoutUser = () =>{
    localStorage.setItem("loggedout"," ")
    // window.location.reload()
    props.changeUser(" ")
  }


  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        {" "}
        Hello , <br /> <span className="text-3xl font-semibold">username 😎</span>
      </h1>
      <button onClick={logoutUser} className="bg-red-500 px-4  py-1 rounded-sm">Log Out</button>
    </div>
  );
};

export default Header;
