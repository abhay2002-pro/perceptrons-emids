import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {MdMic, MdMicOff} from "react-icons/md";

const Audio = ({setData}) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <span>
    {listening ? <button onClick={()=>{
        setData(transcript)
        SpeechRecognition.stopListening()
      }}><MdMicOff style={{fontSize: "25px"}}/></button> : 
      <button onClick={SpeechRecognition.startListening}><MdMic style={{fontSize: "20px"}} /></button>
      }
    </span>
  );
};
export default Audio;