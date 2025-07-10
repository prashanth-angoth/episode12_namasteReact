
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // always import components when we are using structured files
import Body from "./components/Body"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer"; // this is a loading component which will be shown while the data is being fetched
/*initial low level design of swiggy clone apps
  Header
   -logo
   -Nav items
  Body
    - Search
    - RestaurantContainer
      -Restaurant Card
        -Name, img, star rating,cuisine
  Footer
   -Copyright
   -Links
   -Address
   -Contact
*/

// whenever we want to develop routing in our application, we have to create routing configuration in app.js file
// and then import the createBrowserRouter
// here we also import router provider this router provider will help us to provide the routing configuration to our application
// here we also import router which help us to load the components dynamically 
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
// REMOVE direct import of Grocery for lazy loading to work

const Applayout=()=>{
  return (
    <div className="app">
      <Header></Header>
      <Outlet/>
    </div>
  )
}
// lazy loading is a technique to load the components only when they are required
// this will help us to reduce the initial loading time of the application
const Grocery = lazy(() => import("./components/Grocery"));

// creating router configuration 

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {path:"/",element:<Body />},
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu />  }, // here in this path ":" it indicates that resId is a dynamic value 
      { path: "/grocery", element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense> } //purpose of Suspense is to show the fallback component while the Grocery component is being loaded
    ], 
    //if there is an error in the path it'll show the error component
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
