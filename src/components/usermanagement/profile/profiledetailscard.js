import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
import "../dev2.css"
import DP from "../../../img/dp.jpg";
import Form from "react-bootstrap/Form";
import Accordion from 'react-bootstrap/Accordion'
import {Row, Col} from 'react-bootstrap'
// import { dataPost, dataHeaderGeneral, dataHeaderInputGen  } from '../../../assets/ApiServices'

var myprofiletitles=["Full Name","E-Mail Adress","Company Name","Phone Number","Position","Country","Password"]
var myprofiledata=["Max Mustermann", "max@email.com","Max Company","0987654567654","Manager","Germany","XXXXXXXXXX"]

var dummy=[
  {
    "percentage":"",
    "remainingpercentage":"",
    "remainingtime":"",
    "simulationname": "Simulation 4",
    "date": "13.06.2020",
    "status": "Finished"
},
{
    "percentage":"90",
    "remainingpercentage":"10",
    "remainingtime":"Estimated time remaining : 16min",
    "simulationname": "Simulation 2",
    "date": "13.06.2020",
    "status": "Running"
}
]
export class profiledetailcard extends Component {
  constructor(props) {
    super(props);
    this.makeeditable = this.makeeditable.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.handlecolorcode2Change=this.handlecolorcode2Change.bind(this);
    this.disablecheckbox=this.disablecheckbox.bind(this);
    this.disablecheckbox2=this.disablecheckbox2.bind(this);
    this.disablecheckbox3=this.disablecheckbox3.bind(this);
    this.disablecheckbox4=this.disablecheckbox4.bind(this);
    this.state = {
      colorcode1:'', 
      colorcode2:'',
      bgcolor:"#F7F7F7",
      bgcolor2:"#E0E0E0",
      ShowME:true,
      Selectedfile:null,
      iseditable:false,
      check1:false,
      check2:false,
      check3:false,
      check4:false,
      SelectedCheck:true,
      usercolorcode:"#XXXXXX",
      NoEdit:true,
      Name:"",
      Email:"",
      CompanyName:"",
      phoneNum:"",
      position:"",
      Country:"",
      password:"",
      file:"",
  //   Selectedfile:require("../../../img/dummyprofile.png"),
      fileName: "",
      fileuploaded:false,
      base64:"", 
      color1:"", 
      color2:"",
      profilePic:"",
      id:""
    };
  }

 /*  componentDidMount(){
    console.log("data", dummy)
    console.log("data", this.state.data)
    var data = JSON.parse(localStorage.getItem("userData"))
    let method="GET"
    let type='connectors/profile?id='+data.data.id
     
} */




    handlecolorcode1Change = (evt) => {
      console.log(evt.target.value.length)
      if(evt.target.value.length==0){
        this.setState({ colorcode1:""})
      }
      this.setState({ colorcode1: "#"+evt.target.value})}
    handlecolorcode2Change = (evt) => {
      if(evt.target.value.length==0){
        this.setState({ colorcode2: ""})
      }
      this.setState({ colorcode2: "#"+evt.target.value })
    };
    

    changeColor()
    {
      this.state.bgcolor ==="#F7F7F7" ?
        this.setState({bgcolor: this.state.bgcolor2})
      :
        this.setState({bgcolor: "#F7F7F7"})
    }

      operation(){
        this.setState({
          ShowME:null
        })
      }
      makeeditable()
      {
       this.setState({
         NoEdit:false
       })
        alert("Changings saved successfully")
      }
      disablecheckbox()
      {
        if(this.state.check1===false)
        {
          this.setState({
            color1:"#CC5400",
            color2:"#3A7FC4",
            SelectedCheck:!this.state.SelectedCheck
          })
          this.setState({check2: !this.state.check2})
          this.setState({check3: !this.state.check3})
          this.setState({check4: !this.state.check4})
          console.log(this.state.SelectedCheck)
        }
      }
      disablecheckbox2()
      {
        if(this.state.check2===false)

        {
          this.setState({
            color1:"#31C3BD",
            color2:"#9A3969",
            SelectedCheck:!this.state.SelectedCheck
          })
         
          this.setState({check1: !this.state.check1})
          this.setState({check3: !this.state.check3})
          this.setState({check4: !this.state.check4})
        }
      }
      disablecheckbox3()
      {
        if(this.state.check3===false)
        {
          this.setState({
            color1:"#F9F985",
            color2:"#2F6F61",
            SelectedCheck:!this.state.SelectedCheck
          })
          this.setState({check1: !this.state.check1})
          this.setState({check2: !this.state.check2})
          this.setState({check4: !this.state.check4})
        }
      }
      disablecheckbox4()
      {
        if(this.state.check4===false)
        {
          this.setState({
            color1:"",
            color2:"",
            NoEdit:!this.state.NoEdit,
            SelectedCheck:!this.state.SelectedCheck
          })
          this.setState({check1: !this.state.check1})
          this.setState({check2: !this.state.check2})
          this.setState({check3: !this.state.check3})
        }
      }
      upload=(e)=>{
        let selectedFile = e.target.files;
        e.preventDefault();
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.setState({
            file: file,
            base64: reader.result,
          });
        };
      
      }
      valid(item, type){
        let datavalue=item.target.value;
       
         //console.log("straight date",dateSl)
         if(type==="name")
         {
           this.setState({
             Name:datavalue
           })
         }
         if(type==="company")
         {
           this.setState({
            CompanyName:datavalue
           })
         }
         if(type==="phone")
         {
           this.setState({
            phoneNum:datavalue
           })
         }
         if(type==="position")
         {
           this.setState({
             position:datavalue
           })
         }
         if(type==="country")
         {
           this.setState({
            Country:datavalue
           })
         }
         if(type==="password")
         {
           this.setState({
             password:datavalue
           })
         }
      
         }
         submit=()=>{
          let obj={};
          obj.id= this.state.id
          obj.profileType=localStorage.getItem('profileType')
          obj.password=this.state.password
          obj.email=this.state.Email
          obj.fullName=this.state.Name
          obj.mobile=this.state.phoneNum
          obj.company=this.state.CompanyName
          obj.position=this.state.position
          obj.country=this.state.Country
          obj.adress=null
          obj.profilePic=this.state.base64.split("base64,")[1]
          if(this.state.colorcode1!="" && this.state.colorcode2!=""){
            obj.ColorScheme=this.state.colorcode1+","+ this.state.colorcode2
          //  obj.color1=this.state.colorcode1
           // obj.color2=this.state.colorcode2
          }
          if(this.state.color1!="" && this.state.color2!=""){
            obj.ColorScheme=this.state.color1+","+ this.state.color2
          //  obj.color1=this.state.color1
          //  obj.color2=this.state.color2
          }
          if(this.state.SelectedCheck){
            obj.ColorScheme=null
          }
          let method="PUT"
          let type="connectors/updateProfile?id="+this.state.id
        
          console.log(obj)
          console.log(this.state.SelectedCheck)
      }

      onChangeProfileImg = (e) => {
        console.log(e.target.files[0].name)
        e.preventDefault();
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.setState({
            file: file,
            base64: reader.result,
            profilePic:""
          });
    
          this.setState({
            Selectedfile: URL.createObjectURL(file),
            fileName: file.name,
            fileuploaded:true,
          })
    
             console.log(this.state.base64.split("base64,")[1])
    
        };
      }

  render() {
    return (
      <div className="container">
     
       
        <div className="row">
          <div className="col-2">
            <p className="myprofilecarddesign">Full Name</p>
            <p className="myprofilecarddesign">E-Mail Address</p>
            <p className="myprofilecarddesign">Company Name</p>
            <p className="myprofilecarddesign">Phone Number</p>
            <p className="myprofilecarddesign">Position</p>
            <p className="myprofilecarddesign">Country</p>
            <p className="myprofilecarddesign">Password</p>
            <div className="row">
              <Button className="profilebtns textuppercase ml-3 "  onClick={()=>{this.submit();}} >edit</Button>
            </div>
          </div>

  <div className="col-2 pb-5">
 <p className="myprofilecarddesign" > <input onChange={(item=>this.valid(item, "name"))}
 className="myprofilecarddesign" value={this.state.Name} ></input></p>
 <p className="myprofilecarddesign" > <input 
 className="myprofilecarddesign" value={this.state.Email} ></input></p>
 <p className="myprofilecarddesign" > <input  onChange={(item=>this.valid(item, "company"))}
 className="myprofilecarddesign" value={this.state.CompanyName} ></input></p>
 <p className="myprofilecarddesign" > <input onChange={(item=>this.valid(item, "phone"))}
 className="myprofilecarddesign" value={this.state.phoneNum} ></input></p>
 <p className="myprofilecarddesign" > <input onChange={(item=>this.valid(item, "position"))}
  className="myprofilecarddesign" value={this.state.position} ></input></p>
 <p className="myprofilecarddesign" > <input onChange={(item=>this.valid(item, "country"))}
  className="myprofilecarddesign" value={this.state.Country} ></input></p>
  <input  onChange={(item=>this.valid(item, "password"))}
   className="myprofilecarddesign passwordinputfield"
    style={{textAlign:"left"}} type="password" value={this.state.password} 
   placeholder="XXXXXXXXXX"></input>
  </div>
         
          <div className="col-sm-3 pl-5 d-flex">
            <Card className="myporfilecard">
              <div className="userCard pl-2">
              {this.state.profilePic?
                      <img className=" ml-5 avater m-0 font-weight-bold"
                        src={"https://teconnectivitybucket.s3.us-east-2.amazonaws.com/profile-image/"+this.state.profilePic} 
                        alt="Image" />:
                        <img className=" ml-5 avater m-0 font-weight-bold"
                        src={this.state.Selectedfile} 
                        alt="Image"/> 
                    } 
                <div className="row">
                  <input id="files"  
                    onClick={()=>{this.operation()}} 
                    onChange={(e)=>this.onChangeProfileImg (e)} 
                    style={{display:"none"}}
                    ref={fileinput=>this.fileinput=fileinput} type="file"/>
                    <label className="fileuploadbtn" onClick={()=>this.fileinput.click()}>Change Profile Picture </label>
                </div>

              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default profiledetailcard;
