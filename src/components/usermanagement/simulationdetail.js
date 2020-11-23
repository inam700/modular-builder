import React, { Component } from "react";
import Line from '../../img/Line 3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faEdit } from "@fortawesome/free-solid-svg-icons"
import Chart from "react-google-charts";
import {Modal, Button} from 'react-bootstrap'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  callWithMethodAndData } from '../../Services/ApiServices'

class simulationdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simulationData: [],
      simulationId: 15,
      chart1Display: false,
      chart2Display: false,
      chart3Display: false,
      ProjectName:"",
      ProjectNamecopy:"",
      createdAt:"",
      makeEdit:true,
      ModalShow:false,
      nameErrorshow:false,
      nameError:"Simulation name is Required!",
      SimId:"",
      data:JSON.parse(localStorage.getItem("detail")),
      xAxisValue: [0,9],
    yAxisValue: [-50,50],
    graphType: "linear",
    }
  }

  componentDidMount(){
    console.log("componentDidMount")
    var data=this.state.data
    console.log("data",data)
    this.setState({
     ProjectName:data.simulationName,
     createdAt:data.createdAt,
     SimId:data.id,
     ProjectNamecopy:data.simulationName
    })
    let method="GET"
    let type="simulations/getSimulation?id="+data.id;
    callWithMethodAndData(type,method).then((result)=>{
        let responsejson=result;
        if(responsejson.status==="Success"){
          console.log("series data", JSON.parse(responsejson.data.simulation.series));
          console.log("series data for diagram", JSON.parse(responsejson.data.simulation.buttons));
          this.state.simulationData = JSON.parse(responsejson.data.simulation.buttons);
          let data = JSON.parse(responsejson.data.simulation.series).flat(1);
          window.simulationGraph(data, this.state.xAxisValue, this.state.yAxisValue,this.state.graphType);
         
        }
    })
    
  }

  
  EditClick(){
   // alert("hello")
    this.setState({
      ModalShow:true
    })
  }
  valid(item, type){
    this.setState({
      nameError:""
    })
    let datavalue=item.target.value;
    if(type==="ProjectName"){
      this.setState({
       ProjectNamecopy:datavalue
      })
    }   
    }
    closeModal=()=>{
      this.setState({
        ModalShow:false
      })
    }
    notify = () => toast("Name Updated Successfully");
    UpdateName(){
      if(this.state.ProjectName===""){
        this.setState({
          nameErrorshow:true,
          nameError:"Project Name is Required!"
  
        })
      }else{
       // alert("hello")
       var obj={}
       obj.id=this.state.SimId
       obj.simulationName=this.state.ProjectNamecopy
       console.log(obj)
       let method="PUT"
        let type="simulations/updateSimulation"
        callWithMethodAndData(type,method, obj).then((result)=>{
            let responsejson=result;
            if(responsejson.status==="Success"){
              this.setState({
                ProjectName:responsejson.data.obj.simulationName,
                ProjectNamecopy:responsejson.data.obj.simulationName,
                ModalShow:false,
              })
              localStorage.setItem("detail",JSON.stringify(responsejson.data.obj))
            //  alert("hello")
              this.notify()
            }
            console.log("update here", responsejson.data.obj)
        }) 
      }
    
    }
    DuplicateSim(){
       let method="GET"
        let type="simulations/clone?Id="+this.state.SimId
        callWithMethodAndData(type,method).then((result)=>{
          let responsejson=result;
          if(responsejson.status==="Success"){
            console.log(responsejson);
            window.location = "/myprojects"
          }
      })
    
    }

    DeleteSim(){
      let method="DELETE"
       let type="simulations/simulation?Id="+this.state.SimId
       callWithMethodAndData(type,method).then((result)=>{
         let responsejson=result;
         if(responsejson.status==="Success"){
           console.log(responsejson);
           window.location = "/myprojects"
         }
     })
   
   }
  render() {
    const headerleftright = {
      position: 'relative',
      marginTop: 'auto',
      marginBottom: 'auto',
    }
    

    const root = {
      width: 300,
    }

    const iconDisplay = {
      display: 'grid',
    }
    return (
   
      
      <div className="myfontfamily mycontainer">

        <div className="row">
          <div className="col-12 mt-5">
            <div className="overviewheadings">
              <p className="textuppercase"> my simulations</p>
            </div>
          </div>
        </div>

        <div className="simulation">

        <div className="container">

          <div className="main-section">
            <div className="row">
              <div className="col-9 d-flex">
                <div className="w-100">
                  <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center align-items-center">

                    {this.state.simulationData.map(s => {
                      if(s.type =='header')
                      {
                         return (<div style={headerleftright}>
                          <div className="d-flex align-items-center">
                            <div className="left-header">
                                <div className="myIcons" style={iconDisplay}>
                                {Array.from({length: s.ports}, (item, index) => 
                                  (index == s.activePort) ?  
                                  <FontAwesomeIcon key={index} className="Icons" style={{ color: '#04C740' }} icon={faCircle}></FontAwesomeIcon>
                                  : <FontAwesomeIcon key={index} className="Icons" style={{ color: '#707070' }} icon={faCircle}></FontAwesomeIcon>
                                )}
                                </div>
                            
                            </div>
                          </div>
                          <p>Header</p>
                        </div>
                        )
                      } 
                      else {
                        return ( 
                          <div className="assembles">

                            <div className="assembly">

                            <img src={Line} alt=""></img>

                            <div className="left-header ml-3 widths">
                              <div className="myIcons" style={iconDisplay}>
                                {Array.from({length: s.leftPorts}, (item, index) => 
                                    (index == s.leftActivePort) ?  
                                    <FontAwesomeIcon key={index} className="Icons" style={{ color: '#04C740' }} icon={faCircle}></FontAwesomeIcon>
                                    : <FontAwesomeIcon key={index} className="Icons" style={{ color: '#707070' }} icon={faCircle}></FontAwesomeIcon>
                                  )}
                              </div>
                            </div>

                            <div className="wire">
                            </div>

                            <div className="right-header mr-3 widths">
                              <div className="myIcons" style={iconDisplay}>
                                {Array.from({length: s.rightPorts}, (item, index) => 
                                    (index == s.rightActivePort) ?  
                                    <FontAwesomeIcon key={index} className="Icons" style={{ color: '#04C740' }} icon={faCircle}></FontAwesomeIcon>
                                    : <FontAwesomeIcon key={index} className="Icons" style={{ color: '#707070' }} icon={faCircle}></FontAwesomeIcon>
                                  )}
                                </div>
                            </div>
                            <img src={Line} alt=""></img>
                          </div>
                            <p className="assembly-heading">{s.cableNo}. Assembly</p>
                        </div>
                       )
                      }
                    })}
                   
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                   
                    
                      <div style={{position: 'absolute', left: '-81px', top: '112px'}}>
                     
                      <p style={{transform: 'rotate(-90deg)', position: 'relative', top: '-140px', left: '35px'}}>S-Parameters in dB</p>
                      </div>
                      
                      <div className="d-flex justify-content-center align-items-center" style={{ display: 'inline-grid', height: '96%', maxWidth: 800 }}>                        
                        <div id="container-graph" ></div>
                      </div>
                      
                       
                      <div className="w-100 d-flex justify-content-center">
                
                      </div>
                    </div>
                  </div>

                </div>

              </div>
              <div className="col-3" id="btnGridsm">
             
                  <button onClick={()=>{this.DuplicateSim()}}
                   className="mt-0">Duplicate</button>
                  <button onClick={()=>{this.DeleteSim()}}> Delete</button>
                  <div className="d-flex" style={{justifyContent:"space-between"}}>
                  <input disabled="true"
                   value ={this.state.ProjectName} style={{color: '#707070',border:"none",fontSize:"16px", justifyContent:"left", textAlign:"left", textDecoration:"none"}}>
                    </input> 
                <p onClick={()=>{this.EditClick()}}
                 className="pt-2 pr-2"> <FontAwesomeIcon  className="Icons" style={{ color: '#707070', fontSize:"14px" }} icon={faEdit}></FontAwesomeIcon></p>
                  </div>
                  <p style={{fontSize:"13px", justifyContent:"left", textAlign:"left", textDecoration:"none"}}>{this.state. createdAt}</p>            
                </div>
               
            </div>
          </div>
        </div>
      </div>
      <Modal size="lg" 
      aria-labelledby="contained-modal-title-vcenter"
      centered show={this.state.ModalShow} onHide={this.closeModal}>
        <Modal.Header className="border-0"  closeButton>
          <Modal.Title  style={{fontSize: "16px"}} ></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-4">

            </div>
            <div className="col-4">
             <p style={{color:"darkblue", textAlign:"center"}}>Update Name</p> 
</div>
<div className="col-4">

</div>
          </div>
          <div className="row">
            <div className="col-3">

            </div>
            <div className="col-6">
             <input onChange={(item=>this.valid(item, "ProjectName"))}
              className="w-100 form-control form-control-sm" value={this.state.ProjectNamecopy}
              placeholder="Name" style={{color:"darkblue", textAlign:"center", backgroundColor:"lightgray"}}></input> 
</div>
<div className="col-3">

</div>
          </div>
          <div className="row">
            <div className="col-3">

            </div>
            <div className="col-6">
            {this.state.nameErrorshow? <p style={{color:"red"}}>{this.state.nameError}</p>:""}
</div>
<div className="col-3">

</div>
          </div>
          <div className="row ">
            <div className="col-3">

            </div>
            <div className="col-3">

</div>
            <div className="col-3">
             <Button onClick={()=>{this.UpdateName()}}
             className="w-100 profilebtns " 
             
              style={{color:"white", textAlign:"center"}}>Update</Button> 
</div>
<div className="col-3">

</div>
          </div>
          
           </Modal.Body>
      </Modal>
    
      <ToastContainer />
      </div>

     
    );
  }
}

simulationdetail.propTypes = {};
export default simulationdetail;
