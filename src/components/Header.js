// always create a component with capital letter
// somepeople create new component with JSX extension, it doesn't matter which extension
//  you're using for component

import { LOGO_URL } from "../utils/constants"
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"; // custom hook to show online status
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
// if we want to add inline styling in jsx we have to create object like this and
// use in the particular div or span
const styleCard={
    backgroundColor:"orange"
  }
const Header=()=>{
  // useContext is a react hook which will help us to get the data from the context
  // here we are getting the data from userContext
const data = useContext(userContext);
const cartItems = useSelector((store) => store.cart.items); // using useSelector to get cart items from the Redux store
// useSelector is a hook provided by react-redux to access the state from the store

  const isOnline = useOnlineStatus(); // using custom hook to get online status

  const [logButton,setLogButton] = useState("log in");
    return (
      <div className="flex justify-between shadow-lg sm:bg-pink-200 lg:bg-green-400" style={styleCard}>
        <div>
        <img className="w-14" src={LOGO_URL}/>
        </div>
        <div>
          <ul className="flex p-4 m-4">
            {/* here Link will give us the provision to programmatical navigation.
            it'll render only the component. if we use anchor tag for programmatical navigation that'll load the entire page
            which is not recommended
              */}
              <li>online status: {isOnline ? <span role="img" aria-label="online">🟢</span> : <span role="img" aria-label="offline">🔴</span>}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/cart">cart<sup>{cartItems.length}</sup></Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4"><button onClick={()=>{
              if(logButton=="log in"){
                setLogButton("log out")
              }
              if(logButton=="log out"){
                setLogButton("log in")
              }
              
            }}>{logButton}</button></li>
            <li className="px-4"><Link to="/grocery">{data.loggedInUser}</Link></li>
          </ul>
        </div>
        </div>
    )
  
  }

  export default Header //always export components so that it can be usefull in other components 