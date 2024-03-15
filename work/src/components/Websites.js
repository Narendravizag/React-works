import {  useNavigate} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function Websites() {

  const navigate = useNavigate();
  const baseURL = "http://localhost:3000";

  const [websites, setWebsites] = useState([]);

  const setWebsiteData = () => {
    axios.get(baseURL + "/Work")

      .then((response) => {
        // console.log(response.data);
        setWebsites(response.data);
      }).catch(error => {
        alert("Error Ocurred while loading data:" + error);
      });
  }

  useEffect(() => {
    setWebsiteData();

  }, []);



  const removeWebsite = (id) => {
    // console.log(id)
    axios.delete(baseURL + "/Work/" + id).then((response) => {
      alert("Website record " + id + " deleted!");
      setWebsiteData();
      navigate('/')

    }).catch(error => {
      alert("Error Ocurred in removeWebsite:" + error);
    });
  }



  return (

    <div>
      <h2>EmployeeDetails</h2>
      <br>
      </br>
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/create")}>
          Employee Data
        </button>
      </nav>

      <br></br>
      <div className="col-md-9">
        <h4>Work</h4>

        <div className="tablecontainer">

          <div class="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phonenumber</th>
                  <th>EmployeeId</th>
                  <th>Designation</th>
                  <th>Joining</th>
                  <th scope="col">Action</th>

                </tr>
              </thead>
              <tbody>

                {
                  websites &&
                  websites.map((website, index) => (
                    <tr>
                     

                      <th scope="row">{index +1}</th>
                      <td>{website.name}</td>
                      <td>{website.url}</td>
                      <td>{website.phonenumber}</td>
                      <td>{website.employeeid}</td>
                      <td>{website.designation}</td>
                      <td>{website.dateofjoining}</td>


                      <td >


                        <FaEdit onClick={() => navigate("/edit/" + website.id)} style={{width:"50px",height:"20px"}} />

                      
                        <MdDelete onClick={() => removeWebsite(website.id)}  style={{width:"50px",height:"28px",color:"red"}}/>

                      </td>
                    </tr>


                  ))
                }

              </tbody>
            </table>
          </div>
        </div>


      </div>


    </div>
  );
}
export default Websites;