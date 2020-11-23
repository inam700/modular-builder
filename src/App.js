import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/navHeader/header";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login_register/login";
import Register from "./components/login_register/register";
import StartPage from "./components/builder/start";
import BasicsPage from "./components/builder/basics";
import CreatePage from "./components/builder/create";
import AdoptPage from "./components/builder/adopt";
<<<<<<< HEAD
import Sidebar from './components/usermanagement/usernav/sidebar'
import Overview from './components/usermanagement/overview'
import Myprofile from './components/usermanagement/profile/myprofile'
import Myprojects from './components/usermanagement/myprojects'
import SimulationDetail from './components/usermanagement/simulationdetail'
import ProjectDetail from './components/usermanagement/ProjectDetail'
import Usermanagement_navbar from './components/usermanagement/usernav/usernavbar'
=======
import ForgotPassword from "./components/login_register/forgotPassword";
>>>>>>> 8ddc1aa092b5e6b9a38e6d7e9d7c53124503d3e0

function App() {
  return (
    <div className="App">
      <Header />
<<<<<<< HEAD
      <Route exact path="/" component={StartPage} />
      <Route exact path="/basics" component={BasicsPage} />
      <Route exact path="/create" component={CreatePage} />
      <Route exact path="/adopt" component={AdoptPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

  
        <Route path="/myprofile">
          
          <Usermanagement_navbar setactive={"myprofile"}></Usermanagement_navbar>
          <Sidebar></Sidebar>
          <Myprofile></Myprofile>
        </Route>
        <Route path="/myprojects">
          
          <Usermanagement_navbar setactive={"myprojects"}></Usermanagement_navbar>
          <Sidebar></Sidebar>
          <Myprojects></Myprojects>
        </Route>
        <Route path="/detail">
          
          <Usermanagement_navbar setactive={"myprojects"}></Usermanagement_navbar>
          <Sidebar></Sidebar>
          <SimulationDetail></SimulationDetail>
        </Route>
        <Route path="/Projectdetail">
          
          <Usermanagement_navbar setactive={"myprojects"}></Usermanagement_navbar>
          <Sidebar></Sidebar>
          <ProjectDetail></ProjectDetail>
        </Route>
        <Route path="/CompareSimulations">
      
          
          <Usermanagement_navbar setactive={"myprojects"}></Usermanagement_navbar>
          <Sidebar></Sidebar>
          
        </Route>

        <Route path="/overview">
          
          <Usermanagement_navbar setactive={"overview"}></Usermanagement_navbar>
          <Sidebar></Sidebar>
          <Overview></Overview>
        </Route>
=======
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/basics" component={BasicsPage} />
        <Route path="/create" component={CreatePage} />
        <Route path="/adopt" component={AdoptPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpassword" component={ForgotPassword} />
      </Switch>
>>>>>>> 8ddc1aa092b5e6b9a38e6d7e9d7c53124503d3e0
    </div>
  );
}

export default App;
