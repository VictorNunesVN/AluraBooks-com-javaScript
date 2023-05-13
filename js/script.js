// Obs: o CEP deve ter 9 digitos para cair neste erro. 

async function buscaEndereco(cep) {
    const mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ''
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro) {
            throw Error('CEP inesistente')
        }
        const cidade = document.getElementById('cidade')
        const logradouro = document.getElementById('endereco')
        const estado = document.getElementById('estado')
        const bairro = document.getElementById('bairro')

        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf
        bairro.value = consultaCEPConvertida.bairro

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida
    }
    catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido</p>`
        console.log(erro)
    }
}
let ceps =['01001000','01001001']
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))

const cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value))

