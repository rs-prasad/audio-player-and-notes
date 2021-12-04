const WaveForm = ({ waveformRef }) => {
  return (
    <div className="audio-player__waveform">
      <div className="wave-form__notes-indicator"></div>
      <div className="waveform__display" ref={waveformRef}></div>
      <div className="wave-form__timeline"></div>
    </div>
  );
};

export default WaveForm;
