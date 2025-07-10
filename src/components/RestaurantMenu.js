import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router"; // useParams is a hook which help us to fetch the resId in URL of restaurantMenu
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu= ()=>{
    const {resId} = useParams()
    const { menuData, menuData2, resMenu } = useRestaurantMenu(resId);
    const marginStylev= {
        margin:0
    }
    // const [menuData2,setMenuData2]=useState([]);
    // const [menuData,setMenuData]=useState([]);
    // const [resMenu,setResMenu]=useState([])

    // useEffect(()=>{
    //     fetchMenu();
    // },[]);
    // useEffect(()=>{
    //     if(!!resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards){
    //         setMenuData(resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    //         }
    //         else{
    //             setMenuData2(resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories);
    //         }
    //         console.log(menuData,"wefghjkuytrewqertyuilkjhgfdcvbvnjkuytresdcvbnjytredscxv")
    //         console.log(menuData2,"weruytrewrtyujertyujhgfdssssssssssssssssssssssssssssssssssss")
    // },[resMenu])

    // const  fetchMenu = async ()=>{
    //    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
    //    const json = await data.json()
    //    setResMenu(json);
    // }
    if(resMenu===null|| resMenu.length===0) {
        return <Shimmer/>
    }
    
    
    
    return (
      <div>
        <h1 style={marginStylev}>
          {resMenu?.data?.cards[2]?.card.card.info.name}
        </h1>
        <h6 style={marginStylev}>
          OutLet : {resMenu?.data?.cards[2]?.card.card.info.areaName}, Rating:{" "}
          {resMenu?.data?.cards[2]?.card?.card?.info?.avgRating}
        </h6>
        {     menuData?.length >0 ?
                 menuData?.map((item,index) => {
                 return  <div key={index}>
                   <h2>{item?.card?.info?.name}</h2>
                  <ul>
                      {
                          item?.card?.info?.variantsV2?.variantGroups?.map((pid,index)=>{
                            return <div key={index}>
                            <h4>{pid.name}</h4>{
                            pid?.variations?.map((var1,index)=>{
                                return <li key={index}>{var1?.name}</li>
                            })}
                            </div>
                            //   return <li key={pid.id}>{pid.name}</li>
                          })
                      }
                  </ul>
                 </div>
                }) :
          menuData2?.map((valve,index) => {
             return (<div key={index}>
              <h4>{valve?.title}</h4>
              <ul>
                {valve?.itemCards?.map((val2, index) => {
                    return <li key={index}>{val2?.card?.info?.name}</li>;
                })}
              </ul>
            </div>);
          })
        }
      </div>
    );
}

export default RestaurantMenu;

        {
            //    menuData?.length >0 ?
            //     menuData?.map((item) => (
            //      (<div key={item?.groupId}>
            //       <h4 key={item?.groupId}>{item?.name}</h4>
            //       <ul>
            //           {
            //               item.variations.map((pid)=>{
            //                   return <li key={pid.id}>{pid.name}</li>
            //               })
            //           }
            //       </ul>
            //     </div>)
            //   )) :
            }