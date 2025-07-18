import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router"; // useParams is a hook which help us to fetch the resId in URL of restaurantMenu
import useRestaurantMenu from "../utils/useRestaurantMenu";
import CategoriesInMenu from "./CategoriesInMenu";

const RestaurantMenu= ()=>{
  const [expandedIndex, setExpandedIndex] = useState(null);
    const {resId} = useParams()
    const { menuData, menuData2, resMenu } = useRestaurantMenu(resId);
    const resMenuItems = resMenu?.data?.cards[resMenu.data.cards.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const marginStylev= {
        margin:0
    }
    
    if(resMenu===null|| resMenu.length===0) {
        return <Shimmer/>
    }
    
    
    
    return (
      <div>
        {console.log(resMenuItems,"===================resMenuItems====================")}
        {resMenuItems.filter((item)=>item.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory").map((item, index) => (
          <div key={index}>
            <CategoriesInMenu category={item.card.card} expanded={expandedIndex === index} onChange={() => setExpandedIndex(expandedIndex === index ? null : index)}/>
          </div>
        ))}
      </div>
    );
}

export default RestaurantMenu;



























{/* <h1 style={marginStylev}>
          {resMenu?.data?.cards[2]?.card.card.info.name}
          {console.log(resMenu,"===================menu data====================")}
        </h1>
        <h6 style={marginStylev}>
          OutLet : {resMenu?.data?.cards[2]?.card.card.info.areaName}, Rating:{" "}
          {resMenu?.data?.cards[2]?.card?.card?.info?.avgRating}
        </h6>
{console.log(menuData2,"===================menu data2====================")}
        {console.log(menuData,"===================menu data====================")}
        {     menuData?.length >0 ?
                 menuData?.map((item,index) => {
                 return  <div key={index}>
                  <CategoriesInMenu/>
                 </div>
                    
                }) :
          menuData2?.map((valve,index) => {
             return (<div key={index}>
              <CategoriesInMenu/>
            </div>);
          })
        } */}