import { useEffect, useState } from "react";
import { AiFillBackward, AiFillForward } from "react-icons/ai";
import { FaPause, FaPlay } from "react-icons/fa";
import { MdReplay } from "react-icons/md";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { IoPersonCircleSharp } from "react-icons/io5";

const Controls = ({ wavesurfer }) => {
  //hooks
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0.5);
  const [isToggleCustomer, setIsToggleCustomer] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  //useEffect
  useEffect(() => {
    if (volumeLevel == 0) setIsMuted(true);
    else setIsMuted(false);
    wavesurfer.setVolume(volumeLevel);
  }, [volumeLevel]);

  useEffect(() => {
    if (isMuted) wavesurfer.setVolume(0);
    else wavesurfer.setVolume(volumeLevel);
  }, [isMuted]);

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
      <div
        className="controls__toggle-btn"
        onClick={() => setIsToggleCustomer(!isToggleCustomer)}
      >
        <div
          className={
            isToggleCustomer
              ? "toggle-btn__status toggle-btn__status--change"
              : "toggle-btn__status"
          }
        >
          {isToggleCustomer ? "Customer" : "Agent"}
        </div>

        <div
          className={
            isToggleCustomer
              ? " toggle-btn--translate toggle-btn__circle"
              : "toggle-btn__circle"
          }
        >
          <IoPersonCircleSharp />
        </div>
      </div>

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

      <div className="controls__volume-btn">
        <div className="volume-icon" onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? <HiVolumeOff /> : <HiVolumeUp />}
        </div>
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
