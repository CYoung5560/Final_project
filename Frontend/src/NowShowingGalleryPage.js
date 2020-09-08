import React from "react";
import {Link } from "react-router-dom";
import "./css/App.css";
import ModalGButton from './ModalGButton.js';
import { Container } from "react-bootstrap";

export default class NowShowingGallery extends React.Component {
  render() {
    return (
      <div>
        {/* Jumbotron Header screen 1*/}
        <Container className="cntr_main_qacinema">
          <br/>
          
        <section class="jumbotron text-center border border-5 jmbtrn_qacinema">
            <h2>Now Showing on screen 1!</h2>
            {/* <p class="lead text-muted">Screen 1</p> */}
        </section>

        {/* Start of gallery cards for Screen 1*/}
        <div class="album py-5 crds_qacinema border border-4">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
              
                <div class="card mb-4 shadow-sm">
                <Link to={"./individual/Gremlins"}>
                 <img
                    alt="Gremlins" 
                    src={require('./images/gremlins_500px.jpg')}
                    width="100%"
                    height="100%"
                    class="img-responsive"
                  ></img></Link>
                  <div class="card-body">
                    <p class="card-text">Blast from the Past: Gremlins</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a href="/tickets" role="button" class="btn btn-sm btn-qacinema">Buy Tickets</a>
                        <a href="https://www.imdb.com/title/tt0087363/" target="_blank" role="button" class="btn btn-sm btn-qacinema">IMDB</a>
                        
                        <ModalGButton movieTitle={"Gremlins"}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <Link to={"./individual/IT"}>
                 <img
                    alt="IT" 
                    src={require('./images/it_500px.jpg')}
                    width="100%"
                    height="100%"
                    class="img-responsive"
                  ></img></Link>
                  <div class="card-body">
                    <p class="card-text">Late night horror: IT</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                      <a href="/tickets" role="button" class="btn btn-sm btn-qacinema">Buy Tickets</a>
                      <a href="https://www.imdb.com/title/tt0099864/" target="_blank" role="button" class="btn btn-sm btn-qacinema">IMDB</a>
                      <ModalGButton/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <Link to={"./individual/howlsmovingcastle"}>
                 <img
                    alt="HowlsMovingCastle" 
                    src={require('./images/howls_500px.jpg')}
                    width="100%"
                    height="100%"
                    class="img-responsive"
                  ></img></Link>
                  <div class="card-body">
                    <p class="card-text">Matinee: Howl's Moving Castle</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                      <a href="/tickets" role="button" class="btn btn-sm btn-qacinema">Buy Tickets</a>
                      <a href="https://www.imdb.com/title/tt0347149/" target="_blank" role="button" class="btn btn-sm btn-qacinema">IMDB</a>
                      <ModalGButton/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <br/>
              {/* End of gallery cards for screen 1 */}
              
              {/* Jumbotron Header screen 2*/}
              <section class="jumbotron text-center border border-5 jmbtrn_qacinema">
                <div class="container">
                  <h2>Now Showing on screen 2!</h2>
                  {/* <p class="lead text-muted">Screen 1</p> */}
                </div>
              </section>
              
              {/* Start of gallery cards for screen 2 */}
            <div class="album py-5 crds_qacinema border border-4">
              <div class="container">
                <div class="row">
                <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <Link to={"./individual/Goonies"}>
                 <img
                    alt="Goonies" 
                    src={require('./images/goonies_500px.jpg')}
                    width="100%"
                    height="100%"
                    class="img-responsive"
                  ></img></Link>
                  <div class="card-body">
                    <p class="card-text">Blast from the past: Goonies</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                      <a href="/tickets" role="button" class="btn btn-sm btn-qacinema">Buy Tickets</a>
                      <a href="https://www.imdb.com/title/tt0089218/" target="_blank" role="button" class="btn btn-sm btn-qacinema">IMDB</a>
                      <ModalGButton/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <Link to={"./individual/Hellraiser"}>
                 <img
                    alt="Gremlins" 
                    src={require('./images/hellraiser_500px.jpg')}
                    width="100%"
                    height="100%"
                    class="img-responsive"
                  ></img></Link>
                  <div class="card-body">
                    <p class="card-text">Late night Horror: Hellraiser</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                      <a href="/tickets" role="button" class="btn btn-sm btn-qacinema">Buy Tickets</a>
                      <a href="https://www.imdb.com/title/tt0093177/" target="_blank" role="button" class="btn btn-sm btn-qacinema">IMDB</a>
                      <ModalGButton/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <Link to={"./individual/spiritedaway"}>
                 <img
                    alt="Spirited Away" 
                    src={require('./images/spirited_500px.jpg')}
                    width="100%"
                    height="100%"
                    class="img-responsive"
                  ></img></Link>
                  <div class="card-body">
                    <p class="card-text">Matinee: Spririted Away</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                      <a href="/tickets" role="button" class="btn btn-sm btn-qacinema">Buy Tickets</a>
                      <a href="https://www.imdb.com/title/tt0245429/" target="_blank" role="button" class="btn btn-sm btn-qacinema">IMDB</a>
                      <ModalGButton/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          
              {/* End of gallery cards for screen 2 */}
           
        </div>
      </div>
      <br/>
      </Container>

      </div>
    );
  }
}
