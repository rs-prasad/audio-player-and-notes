import { useGlobalContext } from "../ContextAPI";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaRegFileAudio } from "react-icons/fa";
import { IconContext } from "react-icons";
import "../styles/UploadAudio.css";

const UploadAudio = () => {
  //useState
  const [selected, setSelected] = useState(false);
  //ref
  const inputFile = useRef("");
  //useContext
  const { fileObject, setFileObject } = useGlobalContext();
  //useHistory
  const history = useHistory();
  //functions
  const createFileObject = (file, dataURL) => {
    const newFileObject = {
      name: file.name,
      size: file.size,
      dataURL: dataURL,
    };
    setFileObject(newFileObject);
    setSelected(true);
  };
  const handleChange = () => {
    console.log("onchange ran");
    const file = inputFile.current.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      createFileObject(file, reader.result);
    });
    reader.readAsDataURL(file);
  };
  const handleClear = () => {
    setFileObject({});
    setSelected(false);
    inputFile.current.value = "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("./audio-player");
  };

  return (
    <div className="hero-container">
      <div className="main-container">
        <div className="input-container">
          <div className="input__icon-container">
            <IconContext.Provider
              value={{
                className: `${
                  selected ? "audio-icon" : "audio-icon grey-icon-button"
                }`,
              }}
            >
              <FaRegFileAudio />
            </IconContext.Provider>
          </div>

          {selected ? (
            <p className="main-container__file-name">{fileObject.name}</p>
          ) : (
            <p className="main-container__instruction">
              * Only audio files are allowed.
            </p>
          )}

          <form action="" className="audio-input" onSubmit={handleSubmit}>
            <input
              type="file"
              name="audio"
              id="audio-input__file"
              accept="audio/*"
              onChange={handleChange}
              ref={inputFile}
            />
            {selected ? (
              <div>
                <button type="submit" className="audio-input__btn">
                  Upload
                </button>
              </div>
            ) : (
              <label htmlFor="audio-input__file">
                <div className="audio-input__btn">Choose File</div>
              </label>
            )}
            <button
              type="button"
              className={`audio-input__btn clear-btn ${selected && "show-btn"}`}
              onClick={handleClear}
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadAudio;
