import React, { Component } from 'react'
import Usercard from './profile/profilecard'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import simulation from '../../img/simulation.png'
import { ButtonGroup } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { callWithMethodAndNoData  } from '../../Services/ApiServices'


class overview extends Component {
    state = {
        connectors:[
            {id: 1, functionalArea: 1, componentName: "connector 1", voltage : 2, current1 : 12, current2: 12, wireSize: 1.0, cableConnecton: { id: 5, modularConnectorId: 1, name: "cable connector", position: 1, offsetChambers: 1, rows: 2, createdAt: "2020-11-11T12:54:46.943", updatedAt: "2020-11-11T12:54:46.943" }, updatedAt: "12.11.2020 10:00 AM"},
            {id: 2, functionalArea: 1, componentName: "connector 2", voltage : 2, current1 : 12, current2: 12, wireSize: 1.0, cableConnecton: { id: 5, modularConnectorId: 1, name: "cable connector", position: 1, offsetChambers: 1, rows: 2, createdAt: "2020-11-11T12:54:46.943", updatedAt: "2020-11-11T12:54:46.943" }, updatedAt: "12.11.2020 10:00 AM"}
        ]
    }

    componentDidMount(){
        let method="GET"
        let type='ModularBuilder/getlist'
        callWithMethodAndNoData(type, method).then((result)=>{
            let responsejson=result;
            console.log(responsejson)
            if(responsejson.status==="Success"){
               
            }
            
           
          })
    }
    showDetail(detail){
        // alert("ello")
         console.log("hello",detail)
         localStorage.setItem("detail", JSON.stringify(detail))
         window.location = "/detail"
    
     }
    render() {
        return (
            <div className="myfontfamily mycontainer">
                <div className="row mt-4 ml-1">

                    <div className="col-sm-3">
                        <div className="row">
                            <div className="overviewheadings dev2card">
        <p className="textuppercase">profile - {localStorage.getItem('profileType')}</p>            
                            </div>
                            <div className="mt-4">
                                    <Usercard></Usercard>
                            </div> <br></br>
                        </div>
                        <div className="row">
                            <ButtonGroup vertical style={{width:"90%"}}>
                                <Button className="profilebtns textuppercase mb-5" style={{width:"140px"}} href="/myprofile">Account</Button>
                                <Button className="profilebtns textuppercase mt-5" style={{width:"175px"}} href="./prologue">
                                    Create a new Connector
                                </Button> 
                            </ButtonGroup>
                        </div>
                        
                              
                    </div>

                    <div className="col-sm-8 ml-n4">

                            <div className="overviewheadings ml-n3">
                                <p className="textuppercase"> my Connectors</p>
                            </div>

                            <div className="mt-4">
                                <div className="row mr-5 mb-1">
                                    {
                                        this.state.connectors.map((Detail, i)=>{
                                            return(
                                                <Card onClick={()=>this.showDetail(Detail)}
                                                style={{width:"260px", height:"200px"}} className="simulation carddesign mr-3">
                                                <div className='simulationcard '>
                                                    <div className="text-center">
                                                        <img src={simulation} alt=""/>
                                                    </div>
                                                    <ProgressBar className="progressbar">
                                                        <ProgressBar  className="progressbar1" ></ProgressBar>
                                                        <ProgressBar className="progressbar2"  ></ProgressBar>
                                                    </ProgressBar>
                                                    <div className='simulationCardBottom'>    
                                                  
                                                        <div className="row mr-1">
                                                            <div className="col-8">
                                            <h6 className="p-0 m-0 mt-4" style={{color:"darkblue", height:"20px"}}>{Detail.componentName}</h6>
                                            <p className="p-0 m-0 pl-1" style={{fontSize:"12px",color:"darkblue"}}>{Detail.updatedAt}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </Card>

                                            )
                                        })
                                    }
                                   
                                </div>
                                <Button className="profilebtns textuppercase ml-n3" href="myprojects"> show all</Button>
                            </div> 
                    </div>
                </div>
                <div></div>
            </div>
        )
    }
}

overview.propTypes = {}
export default overview
