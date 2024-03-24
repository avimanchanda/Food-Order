import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//import { MENU_API } from "../../utils/constants";
import useResturantMenu from "../../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu=()=>{

   // const [resInfo, setResInfo]=useState(null);

   const dummy="Dummy Data";

    const {resId}=useParams();

    const resInfo=useResturantMenu(resId);

    const [showindex,setshowindex]=useState(null);

//  useEffect( ()=>{
 //       fetchMenu();
  //},[]

  //);

//const fetchMenu=async()=>{
  //  const data=await fetch(MENU_API+resId);
   // const json=await data.json();

   // console.log(json);
    //setResInfo(json.data);

//};

if(resInfo===null)
{
    return <Shimmer></Shimmer> 
}

const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;

const {itemCards}=(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card );

console.log(resInfo);

    console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log(categories)
    return(
        <div className="menu text-center">
            <h1 className="font-bold my-7 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
            {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            
            {/* <ul>
            {
                itemCards.map((item)=>{
                    return(
                        <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - {item?.card?.info?.price/100}
                        </li>
                    )
                })
            }
            </ul> */}

          {  /* Accordian Categories*/}
          {categories.map((category,index)=>{
            return(
                //Controlled component
                <ResturantCategory key={category?.card?.card?.title} data={category?.card?.card} showitems={index==showindex ? true:false} 
                setshowindex={()=>setshowindex(index)} dummydata={dummy} ></ResturantCategory>

                //UNCONTROLLED COMPONENT

            )
          })}
        </div>
    )
};

export default ResturantMenu;