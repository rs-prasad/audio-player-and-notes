import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>Opps something went wrong</h2>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
