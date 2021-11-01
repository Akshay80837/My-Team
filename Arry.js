import React from "react";
import { Component } from "react/cjs/react.production.min";

class Arry extends Component{

    constructor(props){
        super(props);
        this.State={
            name:[
                "ranjan",
                "suraj",
                "Ashok",
                "Akshay",
                "Amar",
                "raj",
                "sumit",
                "Arya",
                "Ankit",
                "rahul",
            ]
        }
    }
    render(){
        return(
            <>
             <ul>{this.State.name.map((value)=>(
                 <li>{value}</li>
             ))}</ul>
            </>
        )
    }

}

export default Arry;

