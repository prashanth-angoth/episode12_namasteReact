import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchInput,setSearchInput] = useState("")
  // here in the below line we are creating a local state variable here listOfRestaurant variable will be the name
  // and the setListOfRestaurant will be the function which will help us to update the listOfRestaurant state variable
  // this is how we update the variable in react
  // const [listOfRestaurant, setListOfRestaurant] = useState([...resList]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurants,setFilteredRestaurant] = useState([])
  // use effect is another react hook which will help us to render the UI
  // it will called once the body fuction renders it'll immediately loads the useEffect call back function;
  // use effect have two arguments one is call back function and another one is dependency array
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data2 = await data.json();
    setListOfRestaurant(data2?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(data2?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

// useOnlineStatus is a custom hook which will help us to show the online status of the user
const isOnline = useOnlineStatus();
if(isOnline === false){
  return <h1>Looks like you are offline, please check your internet connection</h1>
}


  // this concept will known as conditional rendering. here till the data loads we are showing shimmering effect on ui.
  // we can use ternary opearator also to render this
  if(listOfRestaurant.length===0){
    // this type of Loading won't give better user experience to provide better user experiences most of the industries 
    // are using the shimmer ui which are the component like skeleton structure which don't have any of the data just the empty cards.
    // code is written in shimmer component 
    // return <h1>Loading....</h1>
    return <Shimmer />
  }
  return (
    <div className="body">
      <div className="filter">
        {/* IF WE WANT TO ADD ANYEVENT HANDLERS TO BUTTON WE CAN ADD THE FOLLOWING SYNTAXES
          TO THE BUTTON TAG
          onClick={()=>{
            console.log("BUTTON CLICKED")
          }}
           */}
        <input type="text" className="border border-solid border-black rounded" value={searchInput} onChange={(e)=>{
          setSearchInput(e.target.value)
        }}/>
        <button className="px-2 m-2 bg-green-400 rounded" onClick={
          ()=>{
            const filteredRes = listOfRestaurant.filter((resFil)=>{
              if(resFil?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())){
                return resFil;
              }
            });
            setFilteredRestaurant(filteredRes)
          }
        }>Search</button>
        <button
          className="px-5 ml-10 bg-green-400 rounded"
          onClick={() => {
            debugger;
            // const list =[]
            // listOfRestaurant.forEach((rest)=>{
            //   if(rest.card.card.info.avgRating>4){
            //     list.push(rest)
            //   }
            // })
            const list = listOfRestaurant.filter((rest) => {
              return rest.info.avgRating > 4;
            });
            setListOfRestaurant(list);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-between m-1 rounded-lg">
        {/* one way of passing data using props */}
        {/* <RestaurantCard resName="Meghana Restaurant" cuisine="indian, continental, chinese"/> */}
        {/* you can use map or forEach to render all the restaurants with single component making it dynamic */}
        {filteredRestaurants.map((rest, index) => (
          // key is a unique parameter which should be unique for every card that is rendering
          // best practice is to use keys always, if keys are not available atleast use index
          <Link key={rest.info.id} to={"/restaurants/"+rest.info.id}><RestaurantCard resobj={rest.info} /></Link>
        ))}
        {/* {
          resList.forEach((rest)=>
            <RestaurantCard resobj ={rest}/>
          )
        } */}
        {/* <RestaurantCard resobj ={resList[0]}/>
        <RestaurantCard resobj ={resList[1]}/>
        <RestaurantCard resobj ={resList[2]}/>
        <RestaurantCard resobj ={resList[3]}/>
        <RestaurantCard resobj ={resList[4]}/>
        <RestaurantCard resobj ={resList[5]}/>
        <RestaurantCard resobj ={resList[6]}/> */}
        {/* <RestaurantCard resName="KFC kothapet" cuisine="chicken nuggets,burgers"/> */}
      </div>
    </div>
  );
};

export default Body;
