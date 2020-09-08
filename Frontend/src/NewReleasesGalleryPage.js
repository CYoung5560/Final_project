import React from "react";
import { Link } from "react-router-dom";
import "./css/App.css";
import ModalGButton from "./ModalGButton.js";
import { Container } from "react-bootstrap";

export default class NewReleasesGallery extends React.Component {
  render() {
    return (
      <div>
        <Container className="cntr_main_qacinema">
        <br></br>
        <br></br>
        
        {/* Jumbotron Header screen 1*/}
        <section class="jumbotron text-center border border-5 jmbtrn_qacinema">
          <div class="container">
            <h1>New Releases!</h1>
            
          </div>
        </section>

        {/* Start of gallery cards for Screen 1*/}
        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <Link to={"./individual/ghostbusters"}>
                    <img
                      alt="Ghostbusters"
                      src={require("./images/ghostbusters_500px.jpg")}
                      width="100%"
                      height="100%"
                      class="img-responsive"
                    ></img>
                  </Link>
                  <div class="card-body">
                    <p class="card-text">Blast from the Past: Ghostbusters</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a
                          href="https://www.imdb.com/title/tt0087332/"
                          target="_blank"
                          role="button"
                          class="btn btn-sm btn-qacinema"
                        >
                          IMDB
                        </a>
                        <ModalGButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <Link to={"./individual/theshining"}>
                    <img
                      alt="The Shining"
                      src={require("./images/theshining_500px.jpg")}
                      width="100%"
                      height="100%"
                      class="img-responsive"
                    ></img>
                  </Link>
                  <div class="card-body">
                    <p class="card-text">Late night horror: The Shining</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                       
                        <a
                          href="https://www.imdb.com/title/tt0081505/"
                          target="_blank"
                          role="button"
                          class="btn btn-sm btn-qacinema"
                        >
                          IMDB
                        </a>
                        <ModalGButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <Link to={"./individual/fantasticmrfox"}>
                    <img
                      alt="Fantastic"
                      src={require("./images/fantastic_500px.jpg")}
                      width="100%"
                      height="100%"
                      class="img-responsive"
                    ></img>
                  </Link>
                  <div class="card-body">
                    <p class="card-text">Matinee: Fantastic Mr Fox</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        
                        <a
                          href="https://www.imdb.com/title/tt0432283/"
                          target="_blank"
                          role="button"
                          class="btn btn-sm btn-qacinema"
                        >
                          IMDB
                        </a>
                        <ModalGButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of gallery cards for screen 1 */}
        <br></br>
        <br></br>
        </Container>
      </div>
    );
  }
}
