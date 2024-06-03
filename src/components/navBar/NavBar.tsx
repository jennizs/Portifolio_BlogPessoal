import { Link, useNavigate } from "react-router-dom";
import { ReactNode, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.";
import { toastAlerta } from "../../utils/ToastAlerta";


function Navbar() {

    const navigate = useNavigate()

        const {usuario, handleLogout} = useContext(AuthContext)

        function logout(){
            handleLogout()
                toastAlerta('o usuario foi desconectado!', "info")
                navigate('/login')
            }


            let component: ReactNode;
            if (usuario.token !== "") {

                component = (
                    <div className='w-full bg-indigo-900 text-white flex justify-center py-4 px-10'>
                <div className="container flex justify-between text-lg">
                    <div className='flex gap-4'>
                        <Link to="/postagens" className='hover:underline'>Postagens</Link>
                        <Link to="/temas" className='hover:underline'>Temas</Link>
                        <Link to="/cadastrar-tema" className='hover:underline'>Cadastrar-tema</Link>
                        <Link to="/perfil" className='hover:underline'>Perfil</Link>
                        <Link to="" onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>


                )
            }       
    return (
        <>
            {component}
        </>
    );
}

export default Navbar;
