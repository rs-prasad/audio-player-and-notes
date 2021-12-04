import "../styles/error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <h2>Opps something went wrong</h2>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
