import { useNavigate } from "react-router-dom"; // enables navigation between pages

const Home = () => {
    const navigate = useNavigate();

    return(
     
        <div className="bg-blue">
            <button onClick={() => navigate("/calculate")} > Calculate </button>
        </div>
        
    );
}

export default Home;