import { Link } from "react-router-dom";

const Home = () => (
    <div>
        <h1>Home Page! </h1>
        <br />
        <Link to={"/login"}>Go to Login Page </Link>
    </div>
);

export default Home;