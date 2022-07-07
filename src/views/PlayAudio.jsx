import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./PlayAudio.css";

const PlayAudio = ({ selectedItem }) => {
  let totalAudioNumber = 18;
  let randomGenerate = Math.floor(
    Math.random() * totalAudioNumber + 1
  ).toString();
  let randomThreeDigit = randomGenerate.padStart(3, "0");
  let [randomNumber, setRandomNumber] = useState(randomThreeDigit);

  console.log(randomThreeDigit);
  // const audio = new Audio("/voice/sound" + "200 copy" + ".m4a");
  const audio = new Audio("/voice/sound" + randomNumber + ".m4a");

  return (
    <div className="container-call-voice">
      <Button
        variant="danger"
        className="call-voice"
        onClick={() => {
          audio.play();

          // console.log("ran number before refresh ", randomNumber);
          let randomGenerate = Math.floor(
            Math.random() * totalAudioNumber + 1
          ).toString();
          let randomThreeDigit = randomGenerate.padStart(3, "0");
          setRandomNumber(randomThreeDigit);
          console.log(randomThreeDigit);
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
