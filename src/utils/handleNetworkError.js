import hasInternetConnection from './hasInternetConnection'

export default async function handleNetworkError(err) {
    if(process.env.NODE_ENV === 'development')
        console.log('err:', err)    

    return await hasInternetConnection()
        ? 'Não foi possível estabelecer uma comunicação com o servidor. Tente novamente em alguns instantes.'
        : 'Verifique sua conexão com a internet.'
}