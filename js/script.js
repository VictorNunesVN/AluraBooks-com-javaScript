// Obs: o CEP deve ter 9 digitos para cair neste erro. 

async function buscaEndereco() {
    const consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/')
    const consultaCEPConvertida = await consultaCEP.json()
    console.log(consultaCEPConvertida)
}

buscaEndereco();

