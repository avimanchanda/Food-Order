import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../../utils/UserContext";

class About extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        console.log("Parent did mount");
    }

    render()
    {
        return(
            <div>
                <h1>About</h1>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1>{loggedInUser}</h1> }
                    </UserContext.Consumer>
                </div>
                <h2>Thi is Namaste React</h2>
                <User name={"Avi Manchanda(Function)"}></User>
                <UserClass name={"Avi Manchanda(Class)"}></UserClass>
              
            </div>
        )
    }
}

export default About;