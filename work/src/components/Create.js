import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Create = () => {
    const baseURL = "http://localhost:3000/Work";
    const navigate = useNavigate();

    
    const [enteredWebsiteName, setWebsiteName] = useState('');
    const [enteredUrl, setUrl] = useState('');
    const[enteredPhonenumber,setphonenumber]= useState('');
    const[enteredEmployee,setemployee]= useState('');
    const[enteredDesignation ,setdesignation]= useState('');
    const[enteredJoining ,setjoining]= useState('');


    const websitenameChangeHandler = (event) => {
        setWebsiteName(event.target.value);
    };

    const urlChangeHandler = (event) => {
        setUrl(event.target.value);
    };
    const phonenumberChangeHandler=(event)=>{
        setphonenumber(event.target.value);
    };
    const employeeChangeHandler=(event)=>{
        setemployee(event.target.value);
    };
    const designationChangeHandler=(event)=>{
        setdesignation(event.target.value);
    };
    const joiningChangeHandler=(event)=>{
        setjoining(event.target.value);
    };

    const submitActionHandler = (event) => {
        console.log(enteredWebsiteName, enteredUrl)
        event.preventDefault();
        // post
        axios.post(baseURL, {
            name: enteredWebsiteName,
            url: enteredUrl,
            phonenumber:enteredPhonenumber,
            employeeid:enteredEmployee,
            designation:enteredDesignation,
            dateofjoining:enteredJoining
        })
            .then((response) => {
                alert("Website " + enteredUrl + " added!");
                navigate("/");
            }).catch(error => {
                alert("error===" + error);
            });

    };
    return (
        <div className="container">
            <div className="row">
                <h1>Add a Employee</h1>

                <div className="card-body">
                    <form onSubmit={submitActionHandler}>
                        <div className="form-group">
                            <label>  Name: </label>
                            <input placeholder=" Name" name="firstName" className="form-control"
                                value={enteredWebsiteName} onChange={websitenameChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label> Email: </label>
                            <input placeholder="email" name="lastName" className="form-control"
                                value={enteredUrl} onChange={urlChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label> Phonenumber </label>
                            <input placeholder="Phonenumber" name="lastName" className="form-control"
                                value={enteredPhonenumber} onChange={phonenumberChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label> EmployeeId </label>
                            <input placeholder="EmployeeId" name="lastName" className="form-control"
                                value={enteredEmployee} onChange={employeeChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label> Designation </label>
                            <input placeholder="Designation" name="lastName" className="form-control"
                                value={enteredDesignation} onChange={designationChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label> Joining</label>
                            <input placeholder="Joining" name="lastName" className="form-control" type="date" 
                                value={enteredJoining} onChange={joiningChangeHandler} />
                        </div>



                        <button className="btn btn-success" >Save</button>
                        <button className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</button>
                    </form>

                </div>
            </div>
        </div>
    );
}
export default Create;