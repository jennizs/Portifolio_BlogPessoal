function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col items-center gap-4 justify-center py-4">
                        <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
                        <p className="text-lg">Expresse aqui seus pensamentos</p>
                        <div className="flex justify-around gap-4">
                            <button className="
                                rounded
                                text-white
                                border-white
                                border-solid
                                border-2
                                py-2
                                px-4
                                hover:bg-white
                                hover:text-indigo-900                                
                                ">
                                Nova Postagem
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://i.imgur.com/VpwApCU.png"
                            alt=""
                            className="w-2/3" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
