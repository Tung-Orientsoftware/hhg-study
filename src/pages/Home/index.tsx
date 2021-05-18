import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <div className="wrapper">
        <Link to="/counter">Counter</Link>
        <Link to="/employees">Employee</Link>
      </div>
    </div>
  );
};

export default Home;