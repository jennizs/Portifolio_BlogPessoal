import { Link, Route, Routes } from "react-router-dom";
import Home from "../../paginas/home/home";

function Navbar() {
    return (
        <>
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4 px-10'>
                <div className="container flex justify-between text-lg">
                    <div className='flex gap-4'>
                        <Link to="/postagens" className='hover:underline'>Postagens</Link>
                        <Link to="/temas" className='hover:underline'>Temas</Link>
                        <Link to="/cadastrar-tema" className='hover:underline'>Cadastrar tema</Link>
                        <Link to="/perfil" className='hover:underline'>Perfil</Link>
                        <Link to="/login" className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    );
}

export default Navbar;
