import { render,screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

test("Should render resturant card component with props data",()=>{
    render(<ResturantCard resdata={MOCK_DATA}/>)

    const name=screen.getByText("McDonald's");

    expect(name).toBeInTheDocument();

})

