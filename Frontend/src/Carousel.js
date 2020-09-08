import React from "react";
import "./css/App.css";
import "./css/carousel.css";

export default class Carousel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="img-container">
            <img className="img-fluid" src={require('./images/moviereel_1200px.png')} alt="First slide"/>
              </div>
              <div className="container">
                <div className="carousel-caption text-left">
                  <h1>Book now for an amazing movie experience!</h1>
                  <p>Sign up to our online booking system to book tickets online.</p>
                  <p><a className="btn btn-sm btn-qacinema" href="/signup" role="button"><strong>Sign up today</strong></a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="img-container">
            <img className="img-fluid" src={require('./images/admission_1200px.png')} alt="First slide"/>
            </div>
              <div className="container">
                <div className="carousel-caption">
                  <h1>The Drive in low down</h1>
                  <p>Find out how it all works and what to expect when you arrive.</p>
                  <p><a className="btn btn-sm btn-qacinema" href="/how" role="button"><strong>Learn more</strong></a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="img-container">
            <img className="img-fluid" src={require('./images/filmstrip_1200px.jpg')} alt="First slide"/>
            </div>
              <div className="container">
                <div className="carousel-caption text-right">
                
                
                  <h1>Great movies at great prices!</h1>
                  <p>Have a look at our current films - theres a great choice from retro favorites to late night horror flicks.</p>
                  <p><a className="btn btn-sm btn-qacinema" href="/gallery" role="button"><strong>Now Showing</strong></a></p>
                
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
