import React from 'react';


import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Websites from './components/Websites';
import Create from './components/Create';
import Website from './components/Website';


function App() {
  return (

    <Router>

      <div>
        {/* 1.Added bootstrap Nav bar */}
        <nav class=" navbar bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/create">Create</Link>
                </li>
                {/* <li className="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/edit">Update</Link>
                </li> */}


              </ul>

            </div>

          </div>
        </nav>

        <Routes>


          <Route exact path='/' element={<Websites />}></Route>
          <Route exact path='/create' element={<Create />}></Route>

          <Route exact path='/edit/:id' element={<Website />}></Route>



        </Routes>



      </div>
    </Router>
  );
}

export default App;