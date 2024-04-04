
import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div>
                <h1>About Page</h1>
                <h2>Hello Folks</h2>
                <UserClass name={"Sujith Kumar"}/>
            </div>
        )
    }
}

export default About;