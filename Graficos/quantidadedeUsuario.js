async function quatidadedeUsuarios( ) {
    const url = 'https://raw.githubsercontent.com/guilhermerails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res. json()
 

}

quatidadedeUsuarios()