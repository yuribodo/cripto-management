export default function Signup() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-bold mb-6">Crie Sua Conta</h1>
            <p className="mb-8 text-lg max-w-md text-center">
                Cadastre-se para começar a gerenciar suas criptomoedas.
            </p>

            
            <div className="w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-lg">
                <form className="space-y-6">
                    
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium mb-1">Nome de Usuário</label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Escolha um nome de usuário"
                            required
                        />
                    </div>

                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Digite seu e-mail"
                            required
                        />
                    </div>

                    
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-1">Senha</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Crie uma senha"
                            required
                        />
                    </div>

                    
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirme sua Senha</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Repita sua senha"
                            required
                        />
                    </div>

                    
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-lg shadow-md transition-transform transform hover:scale-105"
                    >
                        Cadastrar
                    </button>
                </form>

                
                <div className="mt-6 text-sm text-center">
                    <p>
                        Já tem uma conta?{' '}
                        <a href="/login" className="text-blue-500 hover:underline">
                            Faça Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
