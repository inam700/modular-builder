import React, { Component } from 'react'

import Card from 'react-bootstrap/Card';
import './style.css'
import {Modal} from 'react-bootstrap'
import simulation from '../../../img/simulation.png'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { callWithMethodAndData  } from '../../../Services/ApiServices'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import Compareicon from '../../../img/compareicon.PNG'
import Foldericon from '../../../img/foldericon.png'
import './style.css'


var Ids=[]
var compIDs=[]
class simulationcard2 extends React.Component {
    state={
        simdata:this.props.simdata,
        groupedSimId:[],
        iscompare:false,
        isgrouped: true,//passed to simulationcard.js class to decide to render checkbox or not and to disable group and compare button
        isenabled: false, // to show and hide apply and cancel button
        hide: true,
        ModalShow:false,
        ProjectName:"",
        isdisabled:true,
        compareButtom:false,
        idDisable:[]
    }
    /*componentDidMount(){
        var data = JSON.parse(localStorage.getItem("userData"))
        console.log("ID from simulation list",data.data.id)
        console.log("ID from simulation list",data.data.token)
        let method="GET"
        let type='simulations/getSimulations?id='+data.data.id
         dataHeaderGeneral(type, method).then((result)=>{
            let responsejson=result;
            if(responsejson.status==="Success"){
                if(responsejson.data!=null){
                    this.setState({
                        simdata:responsejson.data
                    })
                }
            }
            console.log('list', responsejson);
           
          })
    }*/
    changestate()
  {
    this.setState({isenabled: !this.state.isenabled})
    this.setState({isgrouped: !this.state.isgrouped})
    this.setState({hide: !this.state.hide})
    //alert(this.state.isgrouped)
    
  }
   ComparePressed()
  {
    this.setState({isenabled: !this.state.isenabled})
    this.setState({isgrouped: !this.state.isgrouped})
    this.setState({hide: !this.state.hide})
    //alert(this.state.isgrouped)
    this.setState({compareButtom: !this.state.compareButtom})
    console.log("buttom compare", this.state.compareButtom)
    
  }
  groupsimulations()
  {
    this.setState({isenabled: !this.state.isenabled})
    this.setState({isgrouped: !this.state.isgrouped})
    this.setState({hide: !this.state.hide,
        isdisabled:true,
        compareButtom:false,
        idDisable:[]
    })
    localStorage.removeItem("GroupIds");
    localStorage.removeItem( "SelectedCheck");
    Ids=[]
  }
    showDetail(detail){
       // alert("ello")
        console.log("hello",detail)
        localStorage.setItem("detail", JSON.stringify(detail))
        window.location = "/detail"
    }
    notify = () => toast("Only two simulations can be selected for comparison!");
    getSimIdGroup(id){ 
      console.log("h",Ids.length)
      if(Ids.includes(id)){
        for (var i = 0; i < Ids.length; i++){
            if (Ids[i] === id) { 
                Ids.splice(i, 1);
                if(Ids.length<=0){
                    this.setState({
                        isdisabled:true
                    })
                }
                console.log(" in remove checked",Ids)
                console.log(" in remove checked",Ids.length)
                localStorage.setItem("GroupIds", JSON.stringify(Ids))
                localStorage.setItem("SelectedCheck", Ids.length)
                break;
            }
        }
    }else{
        Ids.push(id)
        if(Ids.length!=0){
            this.setState({
                isdisabled:false
            })
        }
    console.log("checked",Ids)
    localStorage.setItem("GroupIds", JSON.stringify(Ids))
    localStorage.setItem("SelectedCheck", Ids.length)
}
    }

    getSimIdCompare(id){ 
        console.log("compare length",compIDs.length)
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
        console.log("checked id",this.state.idDisable)
        localStorage.setItem("GroupcompIDs", JSON.stringify(compIDs))
       // localStorage.setItem("SelectedCheck", Ids.length)
    }
   
          
      }
      compareApply(){

        var ids= localStorage.getItem("GroupcompIDs")
        console.log("hello",ids)
        window.location = "/CompareSimulations"
     }
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
      let method="POST"
      let type="simulations/group"
      callWithMethodAndData(type,method, obj).then((result)=>{
          let responsejson=result;
         console.log("here",responsejson)
          if(responsejson.status==="Success"){
            this.setState({
              ModalShow:false
            })
            window.location="/myprojects"
            localStorage.removeItem("GroupIds");
            localStorage.removeItem( "SelectedCheck");
           
           
          }
       
      })
    }
 
  }
  closeModal=()=>{
    this.setState({
      ModalShow:false
    })
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
    render() {
        return (
            <div>
               <div className="row mr-5 devscroller mb-2">   
           { this.props.simdata.map((Detail, i) => (
              
                    <div className="col-3 mb-3">
                     <Card  onClick={this.state.isgrouped?()=>this.showDetail(Detail):""}
                      style={{width:"260px", height:"200px", cursor:"pointer"}} className="simulation carddesign mr-3">
                                                <div className='simulationcard '>
                                                { this.state.isgrouped ?
                        null:
                        <div className="text-right mr-2">
                            <input disabled={this.state.idDisable.length>0 && 
                            this.state.idDisable.length==2 && Detail.id!==this.state.idDisable[0]
                            && Detail.id!==this.state.idDisable[1]
                            ?true:false}
                            onChange={this.state.compareButtom?

                            ()=>this.getSimIdCompare(Detail.id)
                            :()=>this.getSimIdGroup(Detail.id)}
                             name="isGoing" type="checkbox" ></input>
                        </div>
                    }
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
                                            <h6 className="p-0 m-0 mt-4 pl-3" style={{fontSize:"12px",color:"darkblue", height:"20px", textAlign:"left", justifyContent:"left"}}>{Detail.simulationName}</h6>
                                            <p className="p-0 m-0 pl-3" style={{fontSize:"12px",color:"darkblue",textAlign:"left", justifyContent:"left"}}>{Detail.createdAt}</p>
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
             onClick={()=>{this.changestate()}}><img src={Foldericon} alt="" className="mr-2 mt-n1"></img>group</Button>
            <Button  onClick={()=>{this.ComparePressed()}}
             className="profilebtns textuppercase" disabled={this.state.isenabled}>
              <img src={Compareicon} alt="" className="mr-2 mt-n1"></img>compare
            </Button>
        </div>
        <div className="row mt-n3 ml-1" hidden={this.state.hide}>
        <ToastContainer />
            <Button
             className="profilebtns textuppercase mr-4"
             disabled={this.state.isdisabled}
              onClick={this.state.compareButtom?()=>this. compareApply():()=>{this.OpenModal()}}>Apply</Button>
            <Button className="profilebtns textuppercase" onClick={()=>{this.groupsimulations()}}>Cancel</Button>
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
             <p style={{color:"darkblue", textAlign:"center"}}>Name your Project</p> 
</div>
<div className="col-4">

</div>
          </div>
          <div className="row">
            <div className="col-3">

            </div>
            <div className="col-6">
             <input onChange={(item=>this.valid(item, "ProjectName"))}
              className="w-100 form-control form-control-sm" value={this.state.ProjectName}
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
             <Button onClick={()=>{this.ProjectNameApply()}}
             className="w-100 profilebtns " 
             
              style={{color:"white", textAlign:"center"}}>Apply</Button> 
</div>
<div className="col-3">

</div>
          </div>
          
           </Modal.Body>
      </Modal>
            </div> 
        )
    }
}

export default simulationcard2
