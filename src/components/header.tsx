import { useNavigate } from "react-router-dom"; // enables navigation between pages

const Header = () => {
    const navigate = useNavigate();

    return(
        <header className="h-30 flex items-center justify-between bg-blue-500 px-6 py-3">
                <section onClick={() => navigate("/")} className="cursor-pointer text-white font-bold text-6xl">
                    José Valderrama
                </section>

                <section className="flex justify-between">
                    <div onClick={() => navigate("/")} className="cursor-pointer mx-5 text-white font-bold text-2xl">Home</div>
                    <div onClick={() => navigate("/about")} className="cursor-pointer mx-5 text-white font-bold text-2xl">Sobre</div>
                    <div onClick={() => navigate("/contact")} className="cursor-pointer mx-5 text-white font-bold text-2xl">Contato</div>
                </section>
                   
        </header>
    );
}

export default Header;