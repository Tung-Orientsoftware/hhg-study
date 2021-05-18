import { Button } from "antd"

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <div className="wrapper">
        <Button href="/counter">Counter</Button>
        <Button href="/employees">Employee</Button>
      </div>
    </div>
  );
};

export default Home;