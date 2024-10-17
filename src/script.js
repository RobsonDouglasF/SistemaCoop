// Cadastro de EPI
const cadastroEpi = {
    tipo: {
       
    }
}
const cadastroCoop = {
    tipo: {
       
    }
}
const Cadastro = {
    tipo: {
        desconto: [
        ] 
    }
}

const containerAdicionarDesconto = document.getElementById('containerAdicionarDesconto')
const containerAdicionarCoop = document.getElementById('containerAdicionarCoop')
const containerAdicionarEpi = document.getElementById('containerAdicionarEpi')
const dados = document.getElementById('dados')


//função para abrir o container de descontos
const btnAdicionarDesconto = document.getElementById('btnAdicionarDesconto').addEventListener('click', () => {
    containerAdicionarCoop.className = 'hidden'
    containerAdicionarEpi.className = 'hidden'
    dados.className = 'hidden'
    containerAdicionarDesconto.className = ''

    if(containerAdicionarDesconto.className === '') {
        document.getElementById('matriculaCadastro').focus()

        //função para puxar o valor do Epi automaticamente e multiplica-lo pela quantidade digitada
        const epiCadastro = document.getElementById('epiCadastro')
        const valorCadastro = document.getElementById('valorCadastro')
        const quantidadeCadastro = document.getElementById('quantidadeCadastro')

            epiCadastro.addEventListener('input', () => {
            const epiValue = epiCadastro.value.trim()
            const epi = cadastroEpi.tipo[epiValue]

            if (epi) {
                const valorEpi = parseFloat(epi.valor)
                const quantidade = parseFloat(quantidadeCadastro.value.trim()) || 0
                const valorTotal = (valorEpi * quantidade).toFixed(2)
                valorCadastro.value = valorTotal
            } else {
                valorCadastro.value = ''
            }
        });
       
            quantidadeCadastro.addEventListener('input', () => {
                const epiValue = epiCadastro.value.trim()
                const epi = cadastroEpi.tipo[epiValue]

                if (epi) {
                    const valorEpi = parseFloat(epi.valor)
                    const quantidade = parseFloat(quantidadeCadastro.value.trim()) || 0
                    const valorTotal = (valorEpi * quantidade).toFixed(2)
                    valorCadastro.value = valorTotal
                } else {
                    valorCadastro.value = ''
                }
            });

        //funcao para trazer o nome do Cooperado automaticamente de acordo com a matricula
        const inputMatricula = document.getElementById('matriculaCadastro')
        const inputNome = document.getElementById('nomeCadastro')

        inputMatricula.addEventListener('input', () => {
            const matricula = parseFloat(inputMatricula.value.trim())
            
 
            if (!isNaN(matricula)) {
                const cooperado = cadastroCoop.tipo[matricula]
                
                if (cooperado) {
                    inputNome.value = cooperado.nome
                    
                } else {
                    inputNome.value = ''
                }
            } else {
                inputNome.value = ''
            }
        });
        
        //funcão para adicionar o desconto
        const btnAdicionar = document.getElementById('adicionarDesconto').addEventListener('click', () => {
            const nomeCadastro = document.getElementById('nomeCadastro').value.trim()
            const matriculaCadastro = parseFloat(document.getElementById('matriculaCadastro').value.trim())
            const epiCadastro = document.getElementById('epiCadastro').value.trim()
            const quantidadeCadastro = parseFloat(document.getElementById('quantidadeCadastro').value.trim())
            const valorCadastro = document.getElementById('valorCadastro').value.trim().replace(',', '.')
            const vCadastro = parseFloat(valorCadastro).toFixed(2)
            const periodoCadastro = document.getElementById('periodoCadastro').value      
            

            if(nomeCadastro !== '' && matriculaCadastro !== '' && epiCadastro !== '' && quantidadeCadastro !== '' && valorCadastro !== '' && periodoCadastro !== null) {
                
                Cadastro.tipo.desconto.push({
                    nome: nomeCadastro, 
                    matricula: matriculaCadastro, 
                    epi: epiCadastro, 
                    quantidade: quantidadeCadastro, 
                    valor: vCadastro, 
                    periodo: periodoCadastro,
                    status: ''
                }) 

                const liStatusConsulta = document.createElement('li')
                liStatusConsulta.id = 'status'
                const data = new Date()
                const mes = data.getMonth() + 1
                const periodoAtual = new Date(periodoCadastro)
                const mesPeriodo = periodoAtual.getMonth() + 1 
                if(mes === mesPeriodo) {
                    liStatusConsulta.textContent = 'A pagar'
                    Cadastro.tipo.desconto[Cadastro.tipo.desconto.length - 1].status = liStatusConsulta.textContent
                }else {
                    liStatusConsulta.textContent = 'Pago'
                    Cadastro.tipo.desconto[Cadastro.tipo.desconto.length - 1].status = liStatusConsulta.textContent
                }

                const ulCadastro = document.createElement('ul')
                ulCadastro.className = 'flex border justify-between px-5 py-1 mb-1'
                const liNomeCadastro = document.createElement('li')
                liNomeCadastro.textContent = nomeCadastro
                const limatriculaCadastro = document.createElement('li')
                limatriculaCadastro.textContent = matriculaCadastro
                const liepiCadastro = document.createElement('li')
                liepiCadastro.textContent = epiCadastro
                const liquantidadeCadastro = document.createElement('li')
                liquantidadeCadastro.textContent = quantidadeCadastro
                const livalorCadastro = document.createElement('li')
                livalorCadastro.textContent = vCadastro
                const liperiodoCadastro = document.createElement('li')
                liperiodoCadastro.textContent = periodoCadastro

                ulCadastro.appendChild(liNomeCadastro)
                ulCadastro.appendChild(limatriculaCadastro)
                ulCadastro.appendChild(liepiCadastro)
                ulCadastro.appendChild(liquantidadeCadastro)
                ulCadastro.appendChild(livalorCadastro)
                ulCadastro.appendChild(liperiodoCadastro)

                const listaCadastro = document.getElementById('listaCadastro')
                listaCadastro.appendChild(ulCadastro)
                document.getElementById('nomeCadastro').value = ''
                document.getElementById('matriculaCadastro').focus()
                document.getElementById('matriculaCadastro').value = ''
                document.getElementById('epiCadastro').value = ''
                document.getElementById('quantidadeCadastro').value = ''
                document.getElementById('valorCadastro').value = ''
                document.getElementById('periodoCadastro').value = ''

            }else {
                alert('Preencha os campos indicados.')
            }

        })
            }


})

//função para abrir o container de Cooperados
const btnCadastrarCoop = document.getElementById('btnCadastrarCoop').addEventListener('click', () => {
    containerAdicionarDesconto.className = 'hidden'
    containerAdicionarEpi.className = 'hidden'
    dados.className = 'hidden'
    containerAdicionarCoop.className = ''

    if (containerAdicionarCoop.className === '') {
        inputNome.focus()
        //função para cadastrar Cooperado
const btnCoop = document.getElementById('btnCoop').addEventListener('click', () => {



    const inputNome = document.getElementById('inputNome')
    const textoNome = inputNome.value.trim()
    const inputMatricula = document.getElementById('inputMatricula')
    const textoMatricula = parseFloat(inputMatricula.value.trim())
    const inputFuncao = document.getElementById('inputFuncao')
    const textoFuncao = inputFuncao.value.trim()

    if(textoNome !== '' && !isNaN(textoMatricula) && textoFuncao !== '') {
        cadastroCoop.tipo[textoMatricula] = {nome: textoNome, funcao: textoFuncao}
        console.log(cadastroCoop)

        const ulCoop = document.createElement('ul')
        ulCoop.className = 'flex border justify-between px-5 py-1 mb-1'

        const liNome = document.createElement('li')
        liNome.textContent = cadastroCoop.tipo[textoMatricula].nome

        const liMatricula = document.createElement('li')
        liMatricula.textContent = textoMatricula

        const liFuncao = document.createElement('li')
        liFuncao.textContent = cadastroCoop.tipo[textoMatricula].funcao

        ulCoop.appendChild(liNome)
        ulCoop.appendChild(liMatricula)
        ulCoop.appendChild(liFuncao)

        const listaCoop = document.getElementById('listaCoop')
        listaCoop.appendChild(ulCoop)
        inputNome.value = ''
        inputNome.focus()
        inputMatricula.value = ''
        inputFuncao.value = ''
        
    }else {
        alert('Preencha os campos')
    }
})
    }

})

//função para abrir o container de Epi
const btnCadastrarEpi = document.getElementById('btnCadastrarEpi').addEventListener('click', () => {
    containerAdicionarDesconto.className = 'hidden'
    containerAdicionarCoop.className = 'hidden'
    dados.className = 'hidden'
    containerAdicionarEpi.className = ''

    if (containerAdicionarEpi.className === '') {
        inputEpi.focus()
        //função para cadastrar os EPIs

        const nomesEpi = new Set()
const btnEpi = document.getElementById('btnEpi').addEventListener('click', () => {
    
    const inputEpi = document.getElementById('inputEpi')
    inputEpi.value.trim()
    const textoEpi = inputEpi.value.toLowerCase()

    const inputValor = document.getElementById('inputValor')
    const textoValor = parseFloat(inputValor.value.trim().replace(',', '.'))

    const inputTamanho = document.getElementById('inputTamanho')
    inputTamanho.value.trim()
    const textoTamanho = inputTamanho.value
    
    if(textoEpi !== '' && !isNaN(textoValor) && textoTamanho !== '') {

        cadastroEpi.tipo[textoEpi] = {tamanho: textoTamanho, valor: textoValor }
        nomesEpi.add(textoEpi)
        console.log(cadastroEpi)

        const ulLista = document.createElement('ul')
        ulLista.className = 'flex border justify-between px-5 py-1 mb-1'

        const liEpi = document.createElement('li')
        liEpi.textContent = textoEpi

        const liValor = document.createElement('li')
        liValor.textContent = cadastroEpi.tipo[textoEpi].valor.toFixed(2)

        const liTamanho = document.createElement('li')
        liTamanho.textContent = cadastroEpi.tipo[textoEpi].tamanho

        const listaEpi = document.getElementById('listaEpi')
        
        ulLista.appendChild(liEpi)
        ulLista.appendChild(liValor)
        ulLista.appendChild(liTamanho)

        listaEpi.appendChild(ulLista)

        const opcaoEpi = document.createElement('option')
        opcaoEpi.textContent = textoEpi
        const listaEpiDados = document.getElementById('listaEpiDados')
        listaEpiDados.innerHTML = ''
        nomesEpi.forEach(nome => {
            const opcaoEpi = document.createElement('option')
            opcaoEpi.textContent = nome
            listaEpiDados.appendChild(opcaoEpi)
        });

        inputEpi.value = ''
        inputEpi.focus()
        inputValor.value = ''
        inputTamanho.value = ''
    }else{
        alert('Preencha todos os campos')
    } 
})
    }
})

//função para abrir o container de Outros
const btnOutros = document.getElementById('btnOutros').addEventListener('click', () => {
    containerAdicionarDesconto.className = 'hidden'
    containerAdicionarCoop.className = 'hidden'
    containerAdicionarEpi.className = 'hidden'
    dados.className = 'hidden'
})

//Consultar para exibir os dados
const consultar = document.getElementById('consultar').addEventListener('click', () => {

    containerAdicionarDesconto.className = 'hidden'
    containerAdicionarCoop.className = 'hidden'
    containerAdicionarEpi.className = 'hidden'
    dados.className = ''
    listaConsulta.innerHTML = ''


    Cadastro.tipo.desconto.forEach(registro => {        
        
        const ulDados = document.createElement('ul')
        ulDados.className = 'flex border justify-between px-5 py-1 mb-1'
        ulDados.id = 'ulDados'
        const liNomeConsulta = document.createElement('li')
        liNomeConsulta.textContent = registro.nome
        const liMatriculaConsulta = document.createElement('li')
        liMatriculaConsulta.textContent = registro.matricula
        const liEpiConsulta = document.createElement('li')
        liEpiConsulta.textContent = registro.epi
        const liQuantidadeConsulta = document.createElement('li')
        liQuantidadeConsulta.textContent = registro.quantidade
        const liValorConsulta = document.createElement('li')
        liValorConsulta.textContent = registro.valor
        const liStatusConsulta = document.createElement('li')
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        liStatusConsulta.id = 'status'
        liStatusConsulta.textContent = registro.status


        ulDados.appendChild(checkbox)
        ulDados.appendChild(liNomeConsulta)
        ulDados.appendChild(liMatriculaConsulta)
        ulDados.appendChild(liEpiConsulta)
        ulDados.appendChild(liQuantidadeConsulta)
        ulDados.appendChild(liValorConsulta)
        ulDados.appendChild(liStatusConsulta)

        const listaConsulta = document.getElementById('listaConsulta')
        listaConsulta.appendChild(ulDados)
        console.log(Cadastro)
    })
})

//funçãozinha para atualizar os dados no consultar quando eu atualizar a pagina
function atualizarDom () {

    Cadastro.tipo.desconto.forEach(registro => {
        
        const check = document.createElement('input')
        check.type = 'checkbox'
        check.id = 'checkId'
        const ulDados = document.createElement('ul')
        ulDados.className = 'flex border justify-between px-5 py-1 mb-1'
        ulDados.id = 'ulDados'
        const liNomeConsulta = document.createElement('li')
        liNomeConsulta.textContent = registro.nome
        const liMatriculaConsulta = document.createElement('li')
        liMatriculaConsulta.textContent = registro.matricula
        const liEpiConsulta = document.createElement('li')
        liEpiConsulta.textContent = registro.epi
        const liQuantidadeConsulta = document.createElement('li')
        liQuantidadeConsulta.textContent = registro.quantidade
        const liValorConsulta = document.createElement('li')
        liValorConsulta.textContent = registro.valor
        const liStatusConsulta = document.createElement('li')
        liStatusConsulta.id = 'status'
        liStatusConsulta.textContent = registro.status
        ulDados.appendChild(check)
        ulDados.appendChild(liNomeConsulta)
        ulDados.appendChild(liMatriculaConsulta)
        ulDados.appendChild(liEpiConsulta)
        ulDados.appendChild(liQuantidadeConsulta)
        ulDados.appendChild(liValorConsulta)
        ulDados.appendChild(liStatusConsulta)

        const listaConsulta = document.getElementById('listaConsulta')
        listaConsulta.appendChild(ulDados)
        console.log(registro)
    })
}
document.addEventListener('DOMContentLoaded', () => {

    atualizarDom()
})

//funcao para abrir o menuzinho
const btnOpcao = document.getElementById('btnOpcao').addEventListener('click', () => {
    const ulOpcao = document.getElementById('ulOpcao')      
        ulOpcao.classList.toggle('hidden')
      
        const fecharOpcao = document.getElementById('fecharOpcao').addEventListener('click', () => {            
            ulOpcao.classList.add('hidden')
        })
})

//botao excluir do menuzinho
const excluirOpcao = document.getElementById('excluirOpcao').addEventListener('click', () => {
    const selecaoCheck = document.querySelectorAll('#listaConsulta input[type="checkbox"]')
    selecaoCheck.forEach(checkbox => {
        if (checkbox.checked) {
            const ulDados = checkbox.closest('ul')
            const nome = ulDados.querySelector('li:nth-child(2)').textContent
            const matricula = parseFloat(ulDados.querySelector('li:nth-child(3)').textContent)
            const index = Cadastro.tipo.desconto.findIndex(item => item.nome === nome && item.matricula === matricula)
            if (index !== -1) {
                Cadastro.tipo.desconto.splice(index, 1)
            }
            ulDados.remove()
            ulOpcao.classList.add('hidden')
        }
    })
    
})

//botao para mudar status para pago
const pagoOpcao = document.getElementById('pagoOpcao').addEventListener('click', () => {
    const selecaoCheck = document.querySelectorAll('#listaConsulta input[type="checkbox"]')

    selecaoCheck.forEach((checkbox) => {
        if (checkbox.checked) {           
            const ulDados = checkbox.closest('ul')
            const index = Array.from(selecaoCheck).indexOf(checkbox)
            const statusElemento = ulDados.querySelector('#status')
            statusElemento.textContent = 'Pago'
            Cadastro.tipo.desconto[index].status = 'Pago'
            ulOpcao.classList.add('hidden')
            console.log(Cadastro)
        }
    })
})

//botao para mudar status para A pagar
const pagarOpcao = document.getElementById('pagarOpcao').addEventListener('click', () => {
    const selecaoCheck = document.querySelectorAll('#listaConsulta input[type="checkbox"]')

    selecaoCheck.forEach((checkbox) => {
        if (checkbox.checked) {
            const ulDados = checkbox.closest('ul')
            const index = Array.from(selecaoCheck).indexOf(checkbox)
            const statusElemento = ulDados.querySelector('#status')
            statusElemento.textContent = 'A pagar' 
            Cadastro.tipo.desconto[index].status = 'A pagar'
            ulOpcao.classList.add('hidden')
            console.log(Cadastro) 
        }
    })
})

//input de busca
const inputBusca = document.getElementById('inputBusca')
const btnBusca = document.getElementById('btnBusca')
const listaConsulta = document.getElementById('listaConsulta')   

const atualizarBusca = () => {
    const dadosBusca = inputBusca.value.toLowerCase()
    const itens = listaConsulta.querySelectorAll('ul')

    itens.forEach(ulDados => {
        const nome = ulDados.querySelector('li:nth-child(2)').textContent.toLowerCase()
        if (nome.includes(dadosBusca)) {
            ulDados.style.display = 'flex'
        } else {
            ulDados.style.display = 'none'
        }
    })
}

inputBusca.addEventListener('input', atualizarBusca)
btnBusca.addEventListener('click', atualizarBusca)


