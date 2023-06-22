import React, { useState } from "react";
import getRandomJoke from "../../services/axiosService";
import { Button } from "@mui/material";

const JokeGenerator = () => {
  const [joke, setJoke] = useState(null);

  const [likes, setLikes] = useState(0);
  const [dislikes, seDislikes] = useState(0);

  const obtainJoke = () => {
    getRandomJoke()
      .then((response) => {
        setJoke(response.data.value);
        console.log(response.data.value);
      })
      .catch((error) => alert("Algo ha fallado: " + error))
      .finally(() => console.log("Ya he recogido el chiste"));
  };

  const likeJoke = () => {
    setLikes(likes + 1);
  };
  const dislikeJoke = () => {
    seDislikes(dislikes + 1);
  };
  return (
    <div>
      <img
        src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
        alt="chucknorris"
        style={{ maxHeight: "200px" }}
      ></img>
      <h2>Generador de chistes</h2>
      <div>
        <h4>Total Likes: {likes}</h4>
        <h4>Total dislikes: {dislikes}</h4>
      </div>
      <Button variant="contained" onClick={obtainJoke}>
        Generar chiste
      </Button>
      <div className="container">
        {joke != null ? (
          <div>
            <p>{joke}</p>
            <div>
              <Button variant="outlined" color="success" onClick={likeJoke}>
                Like
              </Button>
              <Button variant="outlined" color="error" onClick={dislikeJoke}>
                Dislike
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <h3>Aun no has generado ningun chiste</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default JokeGenerator;
