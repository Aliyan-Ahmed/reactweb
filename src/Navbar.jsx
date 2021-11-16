import React from "react";

const Navbar = () => {
   return(
       <>
       <div className="container-fluid nav_bg">
      <div className ="row">
       <div className= "col-10 mx-auto">

      

     <nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
  <div ClassName="container-fluid">
    <a ClassName="navbar-brand" href="#">Navbar</a>
    <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span ClassName="navbar-toggler-icon"></span>
    </button>
    <div ClassName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul ClassName="navbar-nav ml-auto mb-2 mb-lg-0">
        <li ClassName="nav-item">
          <a ClassName="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link" href="#">Service</a>
        </li>

        <li ClassName="nav-item">
          <a ClassName="nav-link" href="#">About</a>
        </li>
        

        <li ClassName="nav-item">
          <a ClassName="nav-link" href="#">Contact</a>
        </li>
 
 
   </ul>
    </div>
  </div>
</nav>
</div>
 </div>
 </div>

       </>
   )

}


export default Navbar;