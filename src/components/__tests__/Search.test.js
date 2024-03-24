import { fireEvent, render } from "@testing-library/react";
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResList.json"
import {act} from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

test("Should render Body componet with search button", async ()=>{
    await act(async()=>render(

        <BrowserRouter>
    <Body/>
    </BrowserRouter>
    ))

     const cardsbeforesearch=screen.getAllByTestId("resCard");   

    expect(cardsbeforesearch.length).toBe(9);

    const searchBtn=screen.getByRole("button",{name:"Search"});
    
    const searchinput=screen.getByTestId("searchInput")

    fireEvent.change(searchinput, {target:{value:"burger"}});

    fireEvent.click(searchBtn)

    const rescards=screen.getAllByTestId("resCard");

    expect(rescards.length).toBe(3);

    // Screen should 3 burger cards


});
    
test("Checking the top filtered Resturannts Functionality",async()=>{
    await act(async()=>render(

        <BrowserRouter>
    <Body/>
    </BrowserRouter>
    ))

    const searchbeforefilter=screen.getAllByTestId("resCard");

    expect(searchbeforefilter.length).toBe(9);

    const topratedresturantbutton=screen.getByText("Top Rated Resturants")

    fireEvent.click(topratedresturantbutton);

    const aftersearchfilter=screen.getAllByTestId("resCard");

    expect(aftersearchfilter.length).toBe(8);

})