import { useNavigate } from "react-router-dom"; // enables navigation between pages
import { PiGuitarDuotone } from "react-icons/pi";

const Header = () => {
    const navigate = useNavigate();

    return(
        <header className="h-30 items-center flex gap-6 justify-between bg-green-900 px-6 py-3">
                <section onClick={() => navigate("/")} className="cursor-pointer text-white font-bold text-6xl">
                    José Valderrama
                    <PiGuitarDuotone className="text-4xl text-[#61dafb] bg-white animate-spin-slow"/>
                </section>

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