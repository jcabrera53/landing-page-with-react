import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Navigation = () =>{
  return (
      <div className="text-center">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <a className="navbar-brand ms-2" href="#">Start Bootstrap</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
  <div className="navbar-nav">
      <a className="nav-item nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">About</a>
      <a className="nav-item nav-link" href="#">Services</a>
      <a className="nav-item nav-link" href="#">Contact</a>
    </div>
  </div>
</nav>
</div>
  );
};

const Jumbo = () =>{
  return (
    <div className="text-center">
      <div className="container">
      <div className="row d-flex justify-content-center bg-light">
        <div className="col-10">
          <div className="jumbotron text-start">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus nec rhoncus purus. Morbi ullamcorper ultrices velit,
              non maximus lorem blandit in. Etiam aliquam leo posuere nulla
              semper hendrerit. Nulla facilisi. Cras non diam tristique,
              tempus erat at, tempus magna.
            </p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Call to action!
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

const Cards = () =>{
  return (
    <div className="container">
      <div className="card col-lg-12 col-lg-3">
        
          <img
            src="https://pbs.twimg.com/profile_images/1523083855938433028/OzNv9aVs_400x400.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus nec rhoncus purus. Morbi ullamcorper ultrices velit,
              non maximus lorem blandit in. Etiam aliquam leo posuere nulla
              semper hendrerit. Nulla facilisi.
            </p>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <a href="#" className="btn btn-primary">
              Find out more!
            </a>
          </div>
          </div>
    </div>
  );
};

const Footer = () =>{
  return (
    <div className="text-center">
      <div className="bg-dark text-light py-3">
      Copyright © My WebSite 2022
    </div>
    </div>
  );
};

//create your first component
const Home = () => {
  return (
    <> 
<div>
<Navigation/>
<div className="container" id="box">
<Jumbo />
<div className="card-deck d-lg-flex ">

<Cards />
<Cards />
<Cards />
<Cards />
</div>
</div>
<Footer />
</div>
</> 
  );
};

export default Home;