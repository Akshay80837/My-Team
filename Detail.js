import React, { Component } from "react";
import Dat from "./Data.json";

class Detail extends Component {
    constructor(){
        super();
        this.state = {
            filter:" ",
            data:[
                   {
                       
                       Country:"ranjan kumar",
                       Roll_No:"21",
                       Class:"mca"
                   },
                   {
                    
                    Country:"suraj kumar",
                    Roll_No:"20",
                    Class:"mca"
                },
                {
                    
                    Country:"Amar kumar",
                    Roll_No:"24",
                    Class:"mca"
                },
                {
                    
                    Country:"Ashok kumar",
                    Roll_No:"23",
                    Class:"mca"
                },
                {
                    
                    Country:"Akshay kumar",
                    Roll_No:"25",
                    Class:"mca"
                }
            ]
        };
    }

     searchTxt(e){
         this.setState({filter:e.target.value});
     };
    render() {

        let { filter, data  } = this.state;
        let Datasearch = data.filter(item=> {
           return Object.keys(item).some(key => item[key].toLowerCase().includes(filter.toLowerCase()))
        });

        
   
        return (
            <div className="table">
                <center>
               
                        <h3>Filtering the data </h3>
                        Search:<input type="text" value={filter} onChange={this.searchTxt.bind(this)} placeholder="Search Employ" />
                        <hr/>
                        <table border="1">
                            <tr>
                                <th>Name</th>
                                <th>Roll_No</th>
                                <th>Course</th>
                            </tr>
                            
                                {
                                    (Datasearch.map(item=>
                                        <tr>
                                            <td>{item.Country}</td>
                                            <td>{item.Roll_No}</td>
                                            <td>{item.Class}</td>
                                        </tr>
                                     ))
                                    }
                        
                        </table>
                        </center>

            </div>
        );
    }
}

export default Detail;