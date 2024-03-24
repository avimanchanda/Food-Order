import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { fireEvent } from "@testing-library/react";


test("Header component testing with login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    
    
    );

    const loginButton=screen.getByRole("button",{name:"Login"})

    expect(loginButton).toBeInTheDocument();
})

test("Header component testing with Cart Items 0",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    
    
    );

    const cartItem=screen.getByText("Cart- (0 Items)")

    expect(cartItem).toBeInTheDocument();
})

test("Header component testing with Cart Items existing using regex",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    
    
    );

    const cartItem=screen.getByText(/Cart/)

    expect(cartItem).toBeInTheDocument();
})

test("Header component testing should change login button to logout when clicked",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    
    
    );

    const loginButton=screen.getByRole("button",{name:"Login"})

    fireEvent.click(loginButton)

    const logoutButton=screen.getByRole("button",{name:"Logout"})

    expect(logoutButton).toBeInTheDocument();

})