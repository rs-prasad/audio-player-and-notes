import { useEffect, useRef } from "react";
import { useHistory } from "react-router";
import WaveSurfer from "wavesurfer";
import { useGlobalContext } from "../../ContextAPI";
import "../../styles/AudioPlayer.css";

const AudioPlayer = () => {
  //useContext
  const { fileObject } = useGlobalContext();
  const history = useHistory();
  //useRef
  const waveformRef = useRef(); //refers container tag
  //const wavesurfer = useRef(); //stores instance of wavesurfer
  let wavesurfer = null;
  //debug

  //useEffect
  useEffect(() => {
    console.log(typeof fileObject.message);
    if (fileObject.message === "empty") {
      history.push("/");
    }
    wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#808080",
      progressColor: "#1d4b74",
      barWidth: 2,
      height: 100,
      responsive: true,
      //hideScrollbar: true,
      //autoCenter: true,
      //barRadius: "10px",
    });
    wavesurfer.load(fileObject.dataURL);
    return () => wavesurfer.destroy();
  }, [fileObject]);
  //functions
  console.log();

  return (
    <div className="audio-player">
      <h4>{fileObject.name}</h4>
      <div className="waveform">
        <div className="wave-form__notes-indicator"></div>
        <div className="waveform__display" ref={waveformRef}></div>
        <div className="wave-form__timeline"></div>
      </div>
      <div className="controls">
        <div>Toggle</div>
        <div>backward</div>

        <div onClick={() => wavesurfer.playPause()}>play</div>
        <div>forward</div>

        <div>replay</div>
        <div>volume</div>
      </div>
    </div>
  );
};

export default AudioPlayer;
