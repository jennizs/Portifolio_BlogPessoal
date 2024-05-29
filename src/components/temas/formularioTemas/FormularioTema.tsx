import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext.";
import Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { toastAlerta } from "../../../utils/ToastAlerta";

function FormularioTema() {
    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    const { id } = useParams<{ id: string }>();

    const [tema, setTema] = useState<Tema>({} as Tema);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
              //  alert('O token expirou!');
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado!', 'info');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/temas/`, tema, setTema, {
                    headers: { 'Authorization': token }
                });
                toastAlerta('Tema atualizado com sucesso', 'sucesso');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                 //   alert('O token expirou');
                    handleLogout();
                } else {
                    toastAlerta('Erro ao atualizar o tema!', 'erro');
                }
            }
        } else {
            try {
                await cadastrar(`/temas/`, tema, setTema, {
                    headers: { 'Authorization': token }
                });
                toastAlerta('Tema cadastrado com sucesso', 'sucesso');
            } catch (error: any) {
                if (error.toString().includes('401')) {
                  //  alert('O token expirou');
                    handleLogout();
                } else {
                    toastAlerta('Erro ao cadastrar o tema!', 'erro');
                }
            }
        }
        setIsLoading(false);
        retornar();
    }

    function retornar() {
        navigate('/temas');
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar tema' : 'Editar Tema'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do tema</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={tema.descricao}
                        onChange={atualizarEstado}
                    />
                </div>

                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
                    type="submit">
                    {isLoading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.7"
                            width="24"
                            visible={true}
                        />
                    ) : (
                        <span>{id === undefined ? 'Cadastrar tema' : 'Editar Tema'}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormularioTema;
