import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./PlayAudio.css";

const PlayAudio = ({ selectedItem }) => {
  let randomGenerate = Math.floor(Math.random() * 7 + 1).toString();
  let randomThreeDigit = randomGenerate.padStart(3, "0");
  let [randomNumber, setRandomNumber] = useState(randomThreeDigit);

  console.log(randomThreeDigit);
  // const audio = new Audio("/voice/sound" + "200 copy" + ".m4a");
  const audio = new Audio("/voice/sound" + randomNumber + ".m4a");

  console.log(audio);

  return (
    <div className="container-call-voice">
      <Button
        variant="danger"
        className="call-voice"
        onClick={() => {
          audio.play();
          console.log(audio);

          // console.log("ran number before refresh ", randomNumber);
          let randomGenerate = Math.floor(Math.random() * 7 + 1).toString();
          let randomThreeDigit = randomGenerate.padStart(3, "0");
          setRandomNumber(randomThreeDigit);
          // randomGenerate = Math.floor(Math.random() * 4).toString();
          // console.log("ran number AFTER refresh ", randomNumber);
        }}
      >
        CALL
      </Button>
    </div>
  );
};

export default PlayAudio;
