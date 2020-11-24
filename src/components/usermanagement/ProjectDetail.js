import React, { Component } from 'react'
import PropTypes from 'prop-types'


import Card from 'react-bootstrap/Card';
import simulation from '../../img/simulation.png'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
import { callWithMethodAndData } from '../../Services/ApiServices'
import Compareicon from '../../img/compareicon.PNG'
import Foldericon from '../../img/foldericon.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
          import { faTrash } from "@fortawesome/free-solid-svg-icons"
/**
* @author
* @class ProjectDetail
**/
var compIDs=[]
class ProjectDetail extends Component {
 state = {
    iscompare: true,
    simdataGroup:[{id: 1, functionalArea: 1, componentName: "connector 1", voltage : 2, current1 : 12, current2: 12, wireSize: 1.0, cableConnecton: { id: 5, modularConnectorId: 1, name: "cable connector", position: 1, offsetChambers: 1, rows: 2, createdAt: "2020-11-11T12:54:46.943", updatedAt: "2020-11-11T12:54:46.943" }, updatedAt: "12.11.2020 10:00 AM"},
    {id: 2, functionalArea: 1, componentName: "connector 2", voltage : 2, current1 : 12, current2: 12, wireSize: 1.0, cableConnecton: { id: 5, modularConnectorId: 1, name: "cable connector", position: 1, offsetChambers: 1, rows: 2, createdAt: "2020-11-11T12:54:46.943", updatedAt: "2020-11-11T12:54:46.943" }, updatedAt: "12.11.2020 10:00 AM"}],
    projectName:"",
    idDisable:[],
    hide:true,
    isdisabled:true,
 }

 
showDetail(detail){
    // alert("ello")
     console.log("hello",detail)
     localStorage.setItem("detail", JSON.stringify(detail))
     window.location = "/detail"
 }
 DeleteGroup(){
     var data = JSON.parse(localStorage.getItem("Groupdetail"))
     let method="DELETE"
    let type='simulations/group?Id='+data.id
     callWithMethodAndData(type, method).then((result)=>{
        let responsejson=result;
        if(responsejson.status==="Success"){
            window.location="/myprojects"
         
        }
      })
 }
 getSimIdCompare(id){ 
    console.log("compare length",compIDs.length, id)
    if(compIDs.includes(id)){
        for (var i = 0; i <= compIDs.length; i++){
            if (compIDs[i] === id) { 
                compIDs.splice(i, 1);
                this.state.idDisable.splice(i,1)
                if(compIDs.length<=2){
                    this.setState({
                        isdisabled:true
                    })
                }
                console.log(" in remove checked",compIDs)
                console.log(" in remove checked",compIDs.length)
                localStorage.setItem("GroupcompIDs", JSON.stringify(compIDs))
                //localStorage.setItem("SelectedCheck", compIDs.length)
                break;
            }
        }
    }else if(compIDs.length<2){
        this.state.idDisable.push(id)
        compIDs.push(id)
        if(compIDs.length==2){
            this.setState({
                isdisabled:false
            })
        }
    console.log("checked",compIDs)
    localStorage.setItem("GroupcompIDs", JSON.stringify(compIDs))
}
    
  }

  Comparepressed(){
    this.setState({
        iscompare:!this.state.iscompare,
        hide:false
    })
}
cancelCompare()
{
  this.setState({iscompare: !this.state.iscompare,
hide:true})
  localStorage.removeItem("GroupIds");
}
compareApply(){

    var ids= localStorage.getItem("GroupcompIDs")
    console.log("hello",ids)
    window.location = "/CompareSimulations"
 }
 render() {
  return(
      <div className="ml-5">
           <div className="row">
          <div className="col-12 mt-3">
            <div className="overviewheadings">
  <p className="textuppercase"> {this.state.projectName}</p>
            </div>
          </div>
          </div>
          <div className="row mr-5">
    { this.state.simdataGroup.map((Detail, i) => (
    <div className="col-3 mb-2 mt-5">
         <Card   onClick={this.state.iscompare?()=>this.showDetail(Detail):""}
          style={{width:"260px", height:"200px", cursor:"pointer"}} className="simulation carddesign mr-3">
                                    <div className='simulationcard '>

       
                        <div className="text-right mr-2 pb-2"
                        style={this.state.iscompare?{visibility:"hidden"}:{}}
                        >
                            <input 
                            disabled={this.state.idDisable.length>0 && 
                                this.state.idDisable.length==2 && Detail.id!==this.state.idDisable[0]
                                && Detail.id!==this.state.idDisable[1]
                                ?true:false}
                            onChange={
                            ()=>this.getSimIdCompare(Detail.id)
                           }
                             name="isGoing" type="checkbox" ></input>
                        </div>
                    
                                        <div className="text-center">
                                            <img src={simulation} alt=""/>
                                        </div>
                                        <ProgressBar className="progressbar" style={{display:"none"}}>
                                            <ProgressBar  className="progressbar1" ></ProgressBar>
                                            <ProgressBar className="progressbar2"  ></ProgressBar>
                                        </ProgressBar>
                                        <div className='simulationCardBottom'>    
                                      
                                            <div className="row mr-1">
                                                <div className="col-8">
                                <h6 className="p-0 m-0 mt-4 pl-3" style={{fontSize:"12px",color:"darkblue", height:"20px", textAlign:"left", justifyContent:"left"}}>{Detail.componentName}</h6>
                                <p className="p-0 m-0 pl-3" style={{fontSize:"12px",color:"darkblue", height:"20px", textAlign:"left", justifyContent:"left"}}>{Detail.updatedAt}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Card>

</div>
    )
  )}
  </div>
  <div className="row mt-3 ml-1">
            <Button className="profilebtns textuppercase mr-4" disabled={this.state.isenabled}
             onClick={()=>{this.DeleteGroup()}}>  <FontAwesomeIcon  className="Icons mr-2" 
             icon={faTrash}></FontAwesomeIcon>Delete group</Button>
            <Button  onClick={()=>{this.Comparepressed()}}
             className="profilebtns textuppercase" disabled={this.state.isenabled}>
              <img src={Compareicon} alt="" className="mr-2 mt-n1"></img>compare
            </Button>
        </div>
        <div className="row mt-n3 ml-1" style={this.state.hide?{visibility:"hidden"}:{}}
        >
            <Button
             className="profilebtns textuppercase mr-4"
             disabled={this.state.isdisabled}
              onClick={()=>this.compareApply()}>Apply</Button>
            <Button className="profilebtns textuppercase" onClick={()=>{this.cancelCompare()}}>Cancel</Button>
          </div>
 
  </div>

  )
   }
 }


ProjectDetail.propTypes = {}
export default ProjectDetail