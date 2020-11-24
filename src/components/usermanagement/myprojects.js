import React, { Component } from "react";
import Simulationcard2 from "./profile/simulationcard2";
import folder from '../../img/folderlogo.svg'
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {callWithMethodAndData } from '../../../src/Services/ApiServices'
import './profile/style.css'
class myprojects extends Component {
  constructor(props) {
    super(props);
    this.changestate = this.changestate.bind(this);
    this.groupsimulations = this.groupsimulations.bind(this)
    this.state = { 
      isgrouped: true,//passed to simulationcard.js class to decide to render checkbox or not and to disable group and compare button
      isenabled: false, // to show and hide apply and cancel button
      hide: true,
      ModalShow:false,
      simdata:[],
      ProjectName:"",
      nameError:"Project Name is Required!",
      nameErrorshow:false,
      groups:[{id: 1, functionalArea: 1, componentName: "connector 1", voltage : 2, current1 : 12, current2: 12, wireSize: 1.0, cableConnecton: { id: 5, modularConnectorId: 1, name: "cable connector", position: 1, offsetChambers: 1, rows: 2, createdAt: "2020-11-11T12:54:46.943", updatedAt: "2020-11-11T12:54:46.943" }, updatedAt: "12.11.2020 10:00 AM"},
      {id: 2, functionalArea: 1, componentName: "connector 2", voltage : 2, current1 : 12, current2: 12, wireSize: 1.0, cableConnecton: { id: 5, modularConnectorId: 1, name: "cable connector", position: 1, offsetChambers: 1, rows: 2, createdAt: "2020-11-11T12:54:46.943", updatedAt: "2020-11-11T12:54:46.943" }, updatedAt: "12.11.2020 10:00 AM"}],
      compareButtom:false
    };
  }


  changestate()
  {
    this.setState({isenabled: !this.state.isenabled})
    this.setState({isgrouped: !this.state.isgrouped})
    this.setState({hide: !this.state.hide})
    
  }
   ComparePressed()
  {
    this.setState({isenabled: !this.state.isenabled})
    this.setState({isgrouped: !this.state.isgrouped})
    this.setState({hide: !this.state.hide})
    this.setState({compareButtom: !this.state.compareButtom})
    
  }
  groupsimulations()
  {
    this.setState({isenabled: !this.state.isenabled})
    this.setState({isgrouped: !this.state.isgrouped})
    this.setState({hide: !this.state.hide})
  }
  closeModal=()=>{
    this.setState({
      ModalShow:false
    })
  }
  notify = () => toast("Please Select Simulation to form a Group!");
  notifyGroupCreated = () => toast("Simulation Group is Created!");
  OpenModal(){
  console.log()
    if((localStorage.getItem("SelectedCheck"))==0){
     // alert("hello")
      this.notify()
    }else{
      this.setState({
        ModalShow:true
      })
      console.log("id from local storage", localStorage.getItem("GroupIds"))
    }
  }

  ProjectNameApply(){
    if(this.state.ProjectName===""){
      this.setState({
        nameErrorshow:true,
        nameError:"Project Name is Required!"

      })
    }else{
      var obj={}
      obj.groupId=0
      obj.name=this.state.ProjectName
      var getIds= JSON.parse(localStorage.getItem("GroupIds"))
      obj.simulationIds= getIds
      console.log(obj )
      /* let method="POST"
      let type="simulations/group"
      callWithMethodAndData(type,method, obj).then((result)=>{
          let responsejson=result;
          if(responsejson.status==="Success"){
            this.setState({
              ModalShow:false
            })
            this.notifyGroupCreated()
            localStorage.removeItem("GroupIds");
            localStorage.removeItem( "SelectedCheck");
           
            window.location.reload();
          }
       
      })  */
    }
 
  }
  valid(item, type){
    this.setState({
      nameError:""
    })
    let datavalue=item.target.value;
    if(type==="ProjectName"){
      this.setState({
       ProjectName:datavalue
      })
    }   
    }
    showDetailProject(detail){
       console.log("hello",detail)
       localStorage.setItem("Groupdetail", JSON.stringify(detail))
      window.location = "/Projectdetail"

   }


  render() {
    return (
   
      
      <div className="myfontfamily mycontainer">
          <div className="row mt-4" style={this.state.groups?{}:{display:"none"}}>
          <div className="col-12">
            <div className="overviewheadings">
              <p className="textuppercase"> my Connectors</p>
            </div>
          </div>
        </div>

        <div className="row mt-3 mb-3 mr-5 devscroller" >
          {
          this.state.groups?.map((Detail, i)=>{
              return(
                <div className="col-3 mb-3">
                <Card  onClick={()=>this.showDetailProject(Detail)}
                 className="simulation carddesign" style={{height:'190px',width:"260px", cursor:"pointer"}}>
                <div className='simulationcard'>    
                    <div className="text-center mt-2">
                       <img src={folder} alt="" />
                    </div>
                    <div className='simulationCardBottom mt-5'>
              <h6  className="m-0 p-0"
               style={{color:"#0865a1", justifyContent:"left", fontSize:"13px"}}>{Detail.name}</h6>
                        <div className="row mr-1">
                            <div className="col-12">
                                <p  className="m-0 p-0 py-1"
                                style={{color:"#0865a1", justifyContent:"left", fontSize:"12px"}}>{Detail.updatedAt}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Card>
                </div>
              )
            })
          }
         
                
                
            </div>

        <div className="row">
          <div className="col-12 mt-3">
            <div className="overviewheadings">
              <p className="textuppercase"> my connectors</p>
            </div>
          </div>
        </div>

        <div className="row mt-3 ml-3" >
          <div className="col-12 ">
          <Simulationcard2 simdata={this.state.simdata}
             group={this.state.isgrouped} compare={this.state.compareButtom}></Simulationcard2>
          </div>
          
        </div>   
      </div>
     
    );
  }
}

myprojects.propTypes = {};
export default myprojects;
