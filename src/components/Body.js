import ResturantCard from "./ResturantCard";
import resList from "../../utils/mockData";
import { useState,useEffect,useContext } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { withPromotedLabel } from "./ResturantCard";
import UserContext from "../../utils/UserContext";

const Body=()=>{
    const [filteredResList, setFilteredResList] = useState([]);
    const [fliteredbackupRest, setfliteredbackupRest]=useState([]);
    const [searchText, setsearchText]=useState([""]);

    const ResturantCardPromoted=withPromotedLabel(ResturantCard);

    console.log(filteredResList);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65491729999999&lng=77.1912904&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsondata=await data.json();
        console.log(jsondata);
        setFilteredResList(jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfliteredbackupRest(jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    const onlinestatus=useOnlineStatus();

    if(onlinestatus===false)
    {
        return (
        <h1>Looks Like You are Offline</h1>
        )
    }


    if(filteredResList.length===0)
    {
        return <Shimmer></Shimmer>
    }

   const {loggedInUser,setUserName}=useContext(UserContext);

    return(
        <div className="body">

        <div className="button-container flex items-center">

            <div className="search m-4 p-4">
                <input className="border-solid border-2 border-black search-box" type="text" data-testid="searchInput" value={searchText}
                
                onChange={(e)=>{
                    setsearchText(e.target.value);
                }}></input>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    const filteredlist=filteredResList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setfliteredbackupRest(filteredlist);

                }}>Search</button>
            </div>

            <div className="m-4 p-4">
            <button className="filter-button px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{
                const topRatedRestaurants=filteredResList.filter(
                    (obj)=>obj.info.avgRating>4);
           // setFilteredResList(topRatedRestaurants);
           setfliteredbackupRest(topRatedRestaurants);
             } }>Top Rated Resturants</button>
            </div>

            <div className="m-4 p-4">
            <label>UserName </label>
            <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
            </div>

             
        </div>

        <div className="body-container flex flex-wrap">
        
        {
            fliteredbackupRest?.map((obj)=>{
                return(
            <Link key={obj?.info?.id} to={"/restaurants/" + obj?.info?.id}> 
            {
                obj?.info?.promoted ? (
                    <ResturantCardPromoted resdata={obj}></ResturantCardPromoted>
                ) :(
                    <ResturantCard resdata={obj}></ResturantCard> 
                )
            }
              
              </Link> 
             ) })
        }
        </div>
        </div>
    )
};

export default Body;