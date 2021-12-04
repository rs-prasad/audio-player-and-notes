import { useGlobalContext } from "../../../ContextAPI";

const WaveForm = ({ waveformRef, wavesurfer, isLoading }) => {
  const { notesArray, convertSecondsToMinutes } = useGlobalContext();

  const timeInPercent = (time) => {
    const timeInSecond =
      parseInt(time.substr(0, 2)) * 60 + parseInt(time.substr(3, 2));
    return (timeInSecond / wavesurfer.getDuration()) * 100;
  };

  const getTimestampArray = (clipDuration) => {
    const array = [];
    for (let i = 0; i < 7; i++) {
      let timestamp = convertSecondsToMinutes((clipDuration / 7) * i);
      array.push(timestamp);
    }
    return array;
  };

  return (
    <div className="audio-player__waveform">
      {!isLoading && (
        <div className="wave-form__notes-indicator">
          {notesArray.map((note) => {
            const { timestamp } = note;
            const time = timeInPercent(timestamp);
            return <div key={timestamp} style={{ left: `${time}%` }}></div>;
          })}
        </div>
      )}

      <div className="waveform__display" ref={waveformRef}></div>
      {!isLoading && (
        <div className="wave-form__timeline">
          {getTimestampArray(wavesurfer.getDuration()).map(
            (timestamp, index) => {
              return <div key={index}>{timestamp}</div>;
            }
          )}
        </div>
      )}
    </div>
  );
};

export default WaveForm;
