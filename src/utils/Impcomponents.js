//list of imp packages
// select drop down
// npm i react-select
// fetch interceptor  already installed
//react bootstrap allready installed
/**
 * select drop down
 *installation => npm i react-select
 * */
//-----------------------------------------------//
//component
/**
 * <Select
 isClearable={false}
 maxMenuHeight={190}
 value={selectedOption}
 onChange={this.handleChangeoption}
 options={options}
 styles={customStyles}
 />
 *
 * */
const handleChangeoption = (selectedOption) => {
  this.setState({ selectedOption }, () =>
    console.log(`Option selected:`, this.state.selectedOption)
  );
  this.setState({
    productName: selectedOption.label,
    productId: selectedOption.value,
  });
};
//style of select component
const customStyles = {
  container: (provided) => ({
    ...provided,
    display: "inline-block",
    width: "230px",
    minHeight: "1px",
    textAlign: "left",
    border: "none",
  }),
  control: (provided) => ({
    ...provided,
    border: "0.5px solid lightgray",
    borderRadius: "2px",
    minHeight: "1px",
    height: "30px",
    boxShadow: 0,
    "&:hover": {
      border: "0.5px solid lightgray",
    },
  }),
  input: (provided) => ({
    ...provided,
    minHeight: "1px",
    fontSize: "12px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    minHeight: "1px",
    paddingTop: "0",
    paddingBottom: "0",
    color: "#757575",
    fontSize: "12px",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    minHeight: "1px",
    height: "15px",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    minHeight: "1px",
  }),
  valueContainer: (provided) => ({
    ...provided,
    minHeight: "1px",
    height: "28px",
    paddingTop: "0",
    paddingBottom: "5px",
    fontSize: "12px",
  }),
  singleValue: (provided) => ({
    ...provided,
    minHeight: "1px",
    paddingBottom: "2px",
    fontSize: "12px",
  }),
};
//remove const if using in class components
const downloadFile = () => {
  let data = localStorage.getItem("userData");
  let obj = JSON.parse(data);
  let datateam = localStorage.getItem("team_data");
  let team_obj = JSON.parse(datateam);
  fetch(
    "http://test-te.us-east-2.elasticbeanstalk.com/api/provider/exportMembers?Id=" +
      team_obj.id,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + obj.data.token,
      },
    }
  )
    .then((response) => response.blob())
    .then((blob) => URL.createObjectURL(blob))
    .then((uril) => {
      var link = document.createElement("a");
      link.href = uril;
      link.download = "Export" + ".xml";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
};

//-------------------------- on upload preview//
/**
 * <input id="files"
 onClick={()=>{this.operation()}}
 onChange={(e)=>this.upload(e)}
 style={{display:"none"}}
 ref={fileinput=>this.fileinput=fileinput} type="file"/>
 <Button className="fonts-style" variant="light" style={{fontSize:"12px",fontWeight:"500", border:"0.5px solid lightgray"}}
 onClick={()=>this.fileinput.click()}>{this.state.ShowME?"Upload":"Change"} </Button>
 </div>

 <Card className =" pl-2 pt-3 w-100" style={{height:"6rem",border:"1.6px solid lightgray"}} >
 <div className="row">
 <div className=" col-4 pr-0">
 {this.state.ShowME? null: <Image closeButton className="img-border pl-1 w-50"
            style={{ height:"4rem"}} src={this.state.Selectedfile}/>}
 </div>
 <div className="col-8 pt-4 text-left">
 <h6 style={{border: 'none' ,fontSize: "12px"}} >  {this.state.fileName}</h6>
 * */
//function for preview

/**
 *   upload=(e)=>{
    let selectedFile = e.target.files;
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({
        file: file,
        base64: reader.result
      });
    };
   /* let file = null;
    let fileName = "";
    //Check File is not Empty

        // Select the very first file from list
        let fileToLoad = selectedFile[0];
        fileName = fileToLoad.name;
        // FileReader function for read the file.
        let fileReader = new FileReader();
        // Onload of file read the file content
        fileReader.onload = function(fileLoadedEvent) {
            file = fileLoadedEvent.target.result;
            // Print data in console
            console.log("image here", file);
        };
        // Convert data to base64
        fileReader.readAsDataURL(fileToLoad);

this.setState({
    Selectedfile:URL.createObjectURL(e.target.files[0]),
    fileName:e.target.files[0].name,
    // fileName:fileName,
    //image:file
})
console.log("full state is here", this.state)
}
operation(){
    this.setState({
        ShowME:null
    })
}
 * */
