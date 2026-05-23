import { useNavigate } from "react-router-dom"; // enables navigation between pages

const Contact = () =>{
    const navigate = useNavigate();

    return(
        <div className="flex justify-center w-screen h-screen items-center flex-col gap-2 bg-white rounded-lg shadow">
            <h2 className="text-4xl font-bold text-gray-800 text-center">Conheça os criadoresdo site!</h2>
            <div className="w-96 rounded-xl bg-gray-100 flex flex-col items-center justify-center ">    
                <p className="text-gray-600 text-center font-medium">Pedrinho, O Bontinho - Desenvolvedor - Nº +55 00 0000-0000</p>
                <p className="text-gray-600 text-center font-medium">Eduardo, O Feioso - Desenvolvedor - Nº +55 00 0000-0000</p>
                <p className="text-gray-600 text-center font-medium">Pedro, O Segundo Pedro - Fiel Ajudante - Nº +55 00 0000-0000</p>
            </div>
        </div>
    );
};

export default Contact;