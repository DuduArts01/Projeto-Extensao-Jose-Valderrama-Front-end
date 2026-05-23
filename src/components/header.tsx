import { useNavigate } from "react-router-dom"; // enables navigation between pages
import logo_picture from "../assets/logo.png"

const Header = () => {
    const navigate = useNavigate();

    return(
        <header className="h-30 items-center flex justify-between bg-green-900 px-6 py-2 gap-6">
            <img src={logo_picture} alt={"logo.png"} onClick={() => navigate("/")} className="max-h-full cursor-pointer"/>


            <section className="flex justify-between">
                <div onClick={() => navigate("/")} className="cursor-pointer mx-5 text-white font-bold text-2xl">Home</div>
                <div onClick={() => navigate("/about")} className="cursor-pointer mx-5 text-white font-bold text-2xl">Sobre</div>
                <div onClick={() => navigate("/contact")} className="cursor-pointer mx-5 text-white font-bold text-2xl">Contato</div>
                <div onClick={() => navigate("/calculate")} className="cursor-pointer mx-5 text-white font-bold text-2xl">Construção</div>
            </section>
        </header>
    );
}

export default Header;