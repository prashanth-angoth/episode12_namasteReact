// if you doesn't want to use props you can also do destructuring and directly
//  use in component just like below code

import { CDN_URL } from "../utils/constants" //named exports imported like this eith curly braces
const styleCard = {
  margin:0
}
// const RestaurantCard=({resName,cuisine})=>{
const RestaurantCard=(props)=>{
  return(
  <div className="m-1 p-1 w-[260px] shadow-lg h-[450px] rounded-lg hover:bg-orange-300">
    <img className="rounded-lg" src={CDN_URL+props?.resobj?.cloudinaryImageId}/>
    <hr style={styleCard}></hr>
    {/* when you destructure the props following syntax is used */}
    {/* <h3>{resName}</h3>
    <h4 style={{margin:0}}>{cuisine}</h4> */}
    <h3 className="font-bold">{props?.resobj?.name}</h3>
    <h4 style={{margin:0}} className="break-words whitespace-normal">{props?.resobj?.cuisines.toString()}</h4>
    <h4 style={{margin:0}}>
    Rating : {props?.resobj?.avgRating} Stars
    </h4>
    <p style={{margin:0}}>ETA: {props?.resobj?.sla?.deliveryTime} Minutes</p>
  </div>
  )
  }

  export default RestaurantCard