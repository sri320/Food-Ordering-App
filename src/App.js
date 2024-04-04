import React, { Suspense, lazy } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
//import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import ShimmerUI from "./components/ShimmerUI";
//import Grocery from "./components/Grocery";


const AppLayout = ()=>{
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

// LAZY LOADING || DYNAMIC IMPORT
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
    {
        path:"/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Body />,
            },
            {
                path : "/about",
                element : <Suspense fallback={<ShimmerUI />}><About /></Suspense>,
            },  
            {
                path:"/contact",
                element : <Contact />,
            },
            {
                path:"/grocery",
                element : <Suspense fallback={<h1>Loading!!!!!!....</h1>}><Grocery /></Suspense>,
            },
            {
                path:"/restaurants/:resId",
                element : <RestaurantMenu />,
            },
        ],
        errorElement : <Error />,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);




