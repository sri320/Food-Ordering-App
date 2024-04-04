import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        /* INTIAL DEFAULT DATA  */
        this.state = {
            userInfo:{
                name : "user",
            }
        }  
    }

    async componentDidMount(){
       const data = await fetch("https://api.github.com/users/Charlie-Chows");
       const json = await data.json();

       this.setState({
        userInfo : json,
       })
    }

    render(){
        /* DESTRUCTURING */
        const {name,avatar_url} = this.state.userInfo;

        return(
            <div className="user-card">
                <img src={avatar_url} />
                <h1>Name : {name}</h1>
                <h2>Location : India</h2>
            </div>
        )
    }
}

export default UserClass;