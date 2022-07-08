import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./PlayAudio.css";

const PlayAudio = ({ selectedItem }) => {
  let totalAudioNumber = 1;
  let randomGenerate = Math.floor(
    Math.random() * totalAudioNumber + 1
  ).toString();
  let randomThreeDigit = randomGenerate.padStart(3, "0");
  let [randomNumber, setRandomNumber] = useState(randomThreeDigit);

  console.log(randomThreeDigit);
  // const audio = new Audio("/voice/sound" + "200 copy" + ".m4a");

  const audio = new Audio("/voice/sound" + randomNumber + ".m4a");

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, []);

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
        }}
      >
        CALL
      </Button>
    </div>
  );
};

export default PlayAudio;
