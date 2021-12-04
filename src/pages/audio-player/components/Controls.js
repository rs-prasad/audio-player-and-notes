import { useEffect, useState } from "react";
import { AiFillBackward, AiFillForward } from "react-icons/ai";
import { FaPause, FaPlay, FaVolumeUp } from "react-icons/fa";
import { MdReplay } from "react-icons/md";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";

const Controls = ({ wavesurfer }) => {
  //hooks
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0.5);

  //useEffect
  useEffect(() => {
    wavesurfer.setVolume(volumeLevel);
  }, [volumeLevel]);

  //handlers
  const handlePlayPause = () => {
    wavesurfer.playPause();
    setIsPlaying(!isPlaying);
  };
  const handleReplay = () => {
    wavesurfer.play(0);
    setIsPlaying(true);
  };

  // event listeners
  wavesurfer.on("finish", () => {
    setIsPlaying(false);
  });

  return (
    <div className="audio-player__controls">
      <div className="controls__btn">Toggle</div>

      <div className="controls__main controls__btn">
        <div className="main__btn" onClick={() => wavesurfer.skipBackward(10)}>
          <AiFillBackward />
        </div>
        <div className="main__btn" onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </div>
        <div className="main__btn" onClick={() => wavesurfer.skipForward(10)}>
          <AiFillForward />
        </div>
        <div className="main__btn">
          <MdReplay onClick={handleReplay} />
        </div>
      </div>

      <div className="controls__btn">
        {volumeLevel == 0 ? <HiVolumeOff /> : <HiVolumeUp />}

        <input
          type="range"
          name="volume"
          id="volume"
          min="0"
          max="1"
          step=".05"
          value={volumeLevel}
          onChange={(e) => setVolumeLevel(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Controls;
