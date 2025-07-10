import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState([]);
  const [menuData2, setMenuData2] = useState([]);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      setResMenu(json);
    };
    if (resId) fetchMenu();
  }, [resId]);

  useEffect(() => {
    if (
      !!resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    ) {
      setMenuData(
        resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
      );
    } else {
      setMenuData2(
        resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories
      );
    }
  }, [resMenu]);

  
  return { menuData, menuData2, resMenu };
};

export default useRestaurantMenu;
