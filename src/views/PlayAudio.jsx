import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { createGlobalStyle } from "styled-components";
import "./PlayAudio.css";

const PlayAudio = ({ selectedItem }) => {
  
  let totalAudioNumber = 23;
  let randomGenerate = Math.floor(
    Math.random() * totalAudioNumber + 1
  ).toString();
  let randomThreeDigit = randomGenerate.padStart(3, "0");
  let [randomNumber, setRandomNumber] = useState(randomThreeDigit);
  // let [randomNumber, setRandomNumber] = useState();
  let [callOrEnd, setCallOrEnd] = useState("CALL");

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

          if(audio.paused) {
            audio.play();
            // setCallOrEnd("End Call");
          }
          else if (!audio.paused) {
            audio.pause();
            // setCallOrEnd("CALL");
            let randomGenerate = Math.floor(
              Math.random() * totalAudioNumber + 1
            ).toString();
            let randomThreeDigit = randomGenerate.padStart(3, "0");
            setRandomNumber(randomThreeDigit);
            // setCallOrEnd("CALL");

          } 
            
        }}
      >
        {callOrEnd}
      </Button>
    </div>
  );
};

export default PlayAudio;
