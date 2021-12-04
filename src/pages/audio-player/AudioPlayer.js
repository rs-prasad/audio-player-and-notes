import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import WaveSurfer from "wavesurfer";
import { useGlobalContext } from "../../ContextAPI";
import "../../styles/AudioPlayer.css";
import Controls from "./components/Controls";
import WaveForm from "./components/WaveForm";
import Notes from "./components/Notes";

const AudioPlayer = () => {
  //Hooks
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const waveformRef = useRef(); //refers container tag
  const { fileObject } = useGlobalContext();

  //useEffect
  useEffect(async () => {
    if (fileObject.message === "empty") {
      history.push("/");
    }
    let wavesurf = await WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#808080",
      progressColor: "#1d4b74",
      barWidth: 2,
      height: 100,
      responsive: true,
      hideScrollbar: true,
      //barRadius: "10px",
    });
    await wavesurf.load(fileObject.dataURL);
    setWavesurfer(wavesurf);
    setIsLoading(false);
    return () => wavesurf.destroy();
  }, [fileObject]);

  return (
    <div className="audio-player">
      <h4>{fileObject.name}</h4>
      <WaveForm waveformRef={waveformRef} />
      {!isLoading && <Controls wavesurfer={wavesurfer} />}
      {!isLoading && <Notes wavesurfer={wavesurfer} />}
    </div>
  );
};

export default AudioPlayer;
