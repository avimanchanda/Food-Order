import Contacts from "../Contacts"
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"


describe("Contact Us Page Test Case", ()=>{
    test("Did contact us component get loaded", ()=>{
  
        render(<Contacts/>)
    
        const heading=screen.getByRole("heading")
    
        expect(heading).toBeInTheDocument();
    })
    
    test("should load button iside contact us component", ()=>{
      
        render(<Contacts/>)
    
        const button=screen.getByRole("button")
    
        expect(button).toBeInTheDocument();
    })
    
    test("should load all text box contact us component", ()=>{
      
        render(<Contacts/>)
    
        const inputboxes=screen.getAllByRole("textbox")
    
        expect(inputboxes.length).toBe(2);
    })
})