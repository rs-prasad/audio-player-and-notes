import { useGlobalContext } from "../ContextAPI";
import { useRef } from "react";
import { FaRegFileAudio } from "react-icons/fa";
import { IconContext } from "react-icons";

const UploadAudio = () => {
  //ref
  const inputFile = useRef("");

  const { fileObject, setFileObject } = useGlobalContext();

  const handleChange = () => {
    console.log(inputFile.current);
  };
  return (
    <div className="hero-container">
      <h1>Audio Player</h1>
      <div className="main-container">
        <div className="input-container">
          <div className="input__icon-container">
            <IconContext.Provider value={{ className: "audio-icon " }}>
              <FaRegFileAudio />
            </IconContext.Provider>
          </div>

          {/* <p className="main-container__instruction">
            * Only audio files are allowed.
          </p> */}
          <p className="main-container__file-name">{`file Name`}</p>
          <form action="" className="audio-input">
            <input
              type="file"
              name="audio"
              id="audio-input__file"
              accept="audio/*"
              onChange={handleChange}
              ref={inputFile}
            />
            <label htmlFor="audio-input__file">
              <div className="audio-input__label">Choose File</div>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadAudio;
