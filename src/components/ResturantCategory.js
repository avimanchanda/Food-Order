//import { useState } from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const ResturantCategory=(props)=>{

    const {data,showitems,setshowindex,dummydata}=props;
    console.log(data)
    //const [showitems,setshowitems]=useState(false);
    
    const handleClick=()=>{
        // if(showitems==false)
        // {
        //     setshowitems(true)
        // }
        // else{
        //     setshowitems(false)
        // }
        setshowindex();
    }
    return(
        <div>
        {/* Accordina Header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick} >
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>

             {/* Accordian Body */}
       {/*showitems && <ItemList items={data.itemCards} dummydata={dummydata}></ItemList>*/ 
       showitems ? <ItemList items={data.itemCards} dummydata={dummydata}></ItemList> : null}

        </div>
       
        </div>
    )
}

export default ResturantCategory;