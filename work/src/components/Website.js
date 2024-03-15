import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Website = props => {
  const baseURL = "http://localhost:3000";
  const navigate = useNavigate();
  const { id } = useParams();
  // const [websitesData, setnewWebsiteData] = useState([]);
  const [currentWebsiteName, setCurrentWebsiteName] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const[currentPhonenumber ,setCurrentphonenumber]= useState('');
  const[currentEmployee,setCurrentemployee]= useState('');
  const[currentDesignation,setCurrentdesignation]= useState('');
  const[currentJoining,setCurrentjoining]= useState('');

  // fetch or retrieve
  const getWebsiteData = () => {
    axios.get(baseURL + "/Work/" + id)

      .then((response) => {
        const setCurrentWebsiteData = response.data;

        setCurrentWebsiteName(setCurrentWebsiteData.name);
        setCurrentUrl(setCurrentWebsiteData.url);
       setCurrentphonenumber(setCurrentWebsiteData.phonenumber);
       setCurrentemployee(setCurrentWebsiteData.employeeid);
       setCurrentdesignation(setCurrentWebsiteData.designation);
       setCurrentjoining(setCurrentWebsiteData.dateofjoining);
      }).catch(error => {
        alert("Error Ocurred while loading data:" + error);
      });

  }

  // update
  const submitActionHandler = (event) => {

    event.preventDefault();
    axios.put(baseURL + "/Work/" + id, {
      name: currentWebsiteName,
      url: currentUrl,
      phonenumber:currentPhonenumber,
            employeeid:currentEmployee,
            designation:currentDesignation,
            dateofjoining:currentJoining
    })

      .then((response) => {
        alert("Website Updated!");
        navigate("/");
      }).catch(error => {
        alert("error===" + error);
      });


  };

  useEffect(() => {
    if (id)
      getWebsiteData(id);
  }, [id]);

  const websitenameChangeHandler = (event) => {
    setCurrentWebsiteName(event.target.value);
  };

  const urlChangeHandler = (event) => {
    setCurrentUrl(event.target.value);
  };
  const phonenumberChangeHandler=(event)=>{
    setCurrentphonenumber(event.target.value);
  };
  const employeeChangeHandler=(event)=>{
    setCurrentemployee(event.target.value);
  };
  const designationChangeHandler=(event)=>{
    setCurrentdesignation(event.target.value);
  };
  const joiningChangeHandler=(event)=>{
    setCurrentjoining(event.target.value);
  };
  return (
    <div className="container">

      <div className="row">
        <h1>Update a Employee</h1>

        <div className="card-body">
          <form onSubmit={submitActionHandler} >
            <div className="form-group">
              <label> Website Name: </label>
              <input placeholder=" Name" name="firstName" className="form-control"
                value={currentWebsiteName} onChange={websitenameChangeHandler} />
            </div>
            <div className="form-group">
                            <label> Email: </label>
                            <input placeholder="email" name="lastName" className="form-control" 
                                value={currentUrl} onChange={urlChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label> Phonenumber </label>
                            <input placeholder="Phonenumber" name="lastName" className="form-control"
                                value={currentPhonenumber} onChange={phonenumberChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label> EmployeeId </label>
                            <input placeholder="EmployeeId" name="lastName" className="form-control"
                                value={currentEmployee} onChange={employeeChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label> Designation </label>
                            <input placeholder="Designation" name="lastName" className="form-control"
                                value={currentDesignation} onChange={designationChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label> Joining</label>
                            <input placeholder="Joining" name="lastName" className="form-control" type="date" 
                                value={currentJoining} onChange={joiningChangeHandler} />
                        </div>



            <button className="btn btn-success" >Update</button>
            <button className="btn btn-danger" onClick="{cancelHandler}" style={{ marginLeft: "10px" }}>Cancel</button>
          </form>

        </div>
      </div>
    </div>
  );
}
export default Website;