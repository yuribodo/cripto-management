export default function Login() {
  return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl font-bold mb-6">Faça Login</h1>
          <p className="mb-8 text-lg max-w-md text-center">
              Entre na sua conta para começar a gerenciar suas criptomoedas.
          </p>

          
          <div className="w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                 
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
                          placeholder="Digite sua senha"
                          required
                      />
                  </div>

                  
                  <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-lg shadow-md transition-transform transform hover:scale-105"
                  >
                      Entrar
                  </button>
              </form>

              
              <div className="mt-4 text-sm text-center">
                  <a href="#" className="text-blue-500 hover:underline">
                      Esqueceu sua senha?
                  </a>
              </div>
          </div>

         
          <div className="mt-8 text-sm text-center">
              <p>
                  Não tem uma conta?{' '}
                  <a href="/signup" className="text-blue-500 hover:underline">
                      Cadastre-se
                  </a>
              </p>
          </div>
      </div>
  );
}
