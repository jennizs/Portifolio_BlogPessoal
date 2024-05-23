
import { useNavigate } from 'react-router-dom';
import CardTemas from '../cardTemas/CardTemas';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext.';
import Tema from '../../../models/Tema';
import { buscar } from '../../../services/Service';

function ListaTemas() {

    const navigate = useNavigate()

    const [temas, setTemas] = useState<Tema[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarTemas() {
        try {
            await buscar(`/temas`, setTemas, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                alert('O token expirou!')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('voce precisa estar logado')
            navigate('/')
        }
    }, [token])


    useEffect(() => {
        buscarTemas()
    }, [temas.length])



    return (
        <>

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


            
                        <>

                            {temas.map((tema) => (
                                <>
                                    <CardTemas key={tema.id} tema={tema} />

                                </>
                            ))}

                            
                        </>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaTemas;