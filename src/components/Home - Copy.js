import React from 'react'
import "../assets/styles/home.css";
function Home() {
  document.addEventListener('DOMContentLoaded',animation,false);
  var textArray = ["“He took his pain and turned it into something beautiful. Into something that people connect to. And that’s what good music does. It speaks to you. It changes you.” ― Hannah Harrington, So what are you waiting for, enjoy your own sort. I mean PUMP IT."];
  function animation(){
    startAnim(0);
  }
  function effect(currentText,i,callback){
    if(i<currentText.length){
      document.getElementById("music").innerHTML = currentText.substring(0,i+1)+"<span id='cursor'></span>"; 
      setTimeout(function(){effect(currentText,i+1,callback)},50);
    }else if(typeof callback == 'function'){
      setTimeout(callback,700); 
    }
  }
  function startAnim(i){
    if(typeof textArray[i] == 'undefined'){
      setTimeout(function(){startAnim(0)},10000);
    }
    if(i<textArray.length){
      var currentText = textArray[i];
      effect(currentText,0,function(){
        startAnim(i+1);
      });
      //startAnim(i+1);
      
    }
  }
  return (
    <>
        <section>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
        <div className="container">
            <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="home">JINGLE JANGLE</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search"/>
                <div className="navbar-nav">
                  <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href="#">Sign out</a>
                  </div>
                </div>
              </header>
              
              <div className="container-fluid">
                <div className="row">
                  <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
                    <div className="position-sticky pt-3">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">
                            <span data-feather="home" className="align-text-bottom"></span>
                            Dashboard
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <span data-feather="file" className="align-text-bottom"></span>
                          Discover
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <span data-feather="shopping-cart" className="align-text-bottom"></span>
                           Streaming
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <span data-feather="users" className="align-text-bottom"></span>
                           Playlist
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                            Bookmark
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="upload.html">
                            <span data-feather="layers" className="align-text-bottom"></span>
                           Uploads
                          </a>
                        </li>
                      </ul>
              
                      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                        <span>Saved reports</span>
                        <a className="link-secondary" href="#" aria-label="Add a new report">
                          <span data-feather="plus-circle" className="align-text-bottom"></span>
                        </a>
                      </h6>
                      <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            Recently Played
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            Liked
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            Library
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            Settings
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
              
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                      <h1 className="h2">Dashboard</h1>
                      
                    </div>
            
                   <div id='music'></div>
                  </main>
                </div>
              </div>
        </div>
    </section>
    <script src="write.js"></script>
    </>
  )
}

export default Home