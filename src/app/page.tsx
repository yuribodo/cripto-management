import Link from 'next/link';

export default function Page() {
    return (
        <div className="bg-gray-800 min-h-screen text-white">
            <nav className="bg-gray-900 py-4 px-6 fixed top-0 left-0 right-0 z-20">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <a href="#">CryptoManager</a>
                    </div>
                    <div className="flex space-x-4 sm:space-x-6">
                        <Link href="/planos" className="text-base sm:text-lg hover:text-blue-500 transition">
                            Planos
                        </Link>
                        <Link href="/login" className="text-base sm:text-lg hover:text-blue-500 transition">
                            Login
                        </Link>
                    </div>
                </div>
            </nav>

            <section 
                className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center py-24 px-6 bg-cover bg-center" 
                style={{ backgroundImage: `url('/background.jpg')` }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Controle Total Sobre Suas Criptomoedas
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl">
                        Nossa plataforma poderosa oferece tudo o que você precisa para gerenciar, monitorar e otimizar seus investimentos em criptomoedas. Acompanhe as flutuações e tome decisões inteligentes com facilidade.
                    </p>
                    
                    <div className="space-x-2 sm:space-x-4">
                        <Link href="/main">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
                                Comece Agora
                            </button>
                        </Link>
                        
                        <button className="bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-transform transform hover:scale-105">
                            Saiba Mais
                        </button>
                    </div>
                </div>
                
                <div className="absolute top-1/4 left-0 w-36 h-36 sm:w-56 sm:h-56 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute bottom-1/4 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-700 rounded-full opacity-20 blur-2xl"></div>
            </section>
        </div>
    );
}
