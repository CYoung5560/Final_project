import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getToken } from './utils/token';
import { Container } from 'react-bootstrap';
import MovieComponent from './MovieComponent';
import DiscussionBoard from './DiscussionBoard';


export default function MovieView(props) {

    const [data, setData] = useState({});

    const { movieName } = useParams();

    const getMovieByTitle = () => {
        // event.preventDefault();

        const token = getToken();
        console.log(movieName);

        fetch(`http://localhost:8000/movie/title/${movieName}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                setData(result.data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }

    return (
        <div onLoad={getMovieByTitle}>
            <Container className="cntr_main_qacinema">
                <hr class="featurette-divider"></hr>
                <div class="row featurette">
                    <div class="col-md-2"></div>
                    <div class="col-md-4">
                        <h4 class="featurette-heading">
                            {movieName}...
                        </h4>
                        <p class="lead">
                            <MovieComponent {...data} />
                        </p>
                    </div>

                    <div class="col-md-4">
                        <img
                            alt="Movie Camera"
                            src={require("./images/camera_500px.jpg")}
                            width="100%"
                            height="100%"
                            class="img-responsive"
                        ></img>
                    </div>
                    <div class="col-md-2"></div>
                </div>
                <hr class="featurette-divider"></hr>
            </Container>

            <br />
            <br />
            <section class="jumbotron text-center">
                <div class="container">
                    <h2> Discussion Board</h2>
                    <DiscussionBoard movieId={data._id} />
                </div>
            </section>

        </div>
    );
}