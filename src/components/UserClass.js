import React from "react"

class UserClass extends React.Component
{

    constructor(props)
    {
        super(props);
        console.log(props);

        this.state={
            count:0,
            count2:0,
            userInfo:{
                login:"Dummy",
                public_repos:"Default",
                avatar_url:"Dummy"
            }
        };
    }

    async componentDidMount()
    {
        const data=await fetch("https://api.github.com/users/avimanchanda");
        const json=await data.json();

        this.setState({
            userInfo:json
        })

        console.log(json);
    }


    render()
    {
        return(
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url}></img>
                <h1>Count= {this.state.count} and {this.state.count2}</h1>
                <button onClick={
                    ()=>{
                        this.setState({
                            count:this.state.count+1,
                            count2:this.state.count2+2
                        })
                    }
                }>Count Increase</button>
                <h2>{this.state.userInfo.login}</h2>
                <h3>Repos Count ={this.state.userInfo.public_repos}</h3>
            </div>
        )
    }
}

export default UserClass;