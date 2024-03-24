import React, { lazy,Suspense ,useEffect,useState} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
//import About from "./components/About.js";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import Error from "./components/Error.js";
import Contacts from "./components/Contacts.js";
import ResturantMenu from "./components/ResturantMenu.js";
import Shimmer from "./components/Shimmer.js";
//import Grocery from "./components/Grocery.js";
import UserContext from "../utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";
import Cart from "./components/Cart.js";

const Grocery=lazy(()=>import("./components/Grocery.js"));

const About=lazy(()=>import("./components/About.js"));

const Applayout=()=>{

    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
      // Make an API call and send username and password
      const data = {
        name: "Avi Manchanda",
      };
      setUserName(data.name);
    }, []);
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="App">
            <Header></Header>
            <Outlet></Outlet>
        </div>
        </UserContext.Provider>
        </Provider>
    )
};

const appRouter=createBrowserRouter(
    [
        {
            path:"/",
            element:<Applayout></Applayout>,
            children:[  {
                path:"/about",
                element:<Suspense fallback={<Shimmer></Shimmer>}><About></About></Suspense>
            },
            {
                path:"/contact",
                element:<Contacts></Contacts>
            },
        {
            path:"/",
            element:<Body></Body>
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<Shimmer></Shimmer>}><Grocery></Grocery></Suspense>
        },
        {
            path:"/restaurants/:resId",
            element:<ResturantMenu></ResturantMenu>
        },
        {
            path:"/cart",
            element:<Cart></Cart>
        }
    
        ],
            errorElement:<Error></Error>
        },
      
    ]
);

const root=ReactDOM.createRoot(document.querySelector("#root"));

//root.render(<Applayout></Applayout>);

root.render(<RouterProvider router={appRouter}></RouterProvider>)