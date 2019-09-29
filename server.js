let nodemenu = require('node-menu')
const { rmnull, addend, deletebycpf, menu, exibirclientes, binsearch } = require('./function')
const { selectionsort, insertionsort, bubblesort, timeoffunction } = require('./algorithms')
const DB = require("./pessoas")
// let dados
let opcoes = menu()
dados = insertionsort(DB)

// nodemenu.addDelimiter('-', 60, opcoes[0])
nodemenu.addItem(
    opcoes[1],
    () => {
        exibirclientes(dados)
    })
    .addItem(
        opcoes[2],
        (cpf) => {
            let res = binsearch(dados, cpf)
            if (res === -1)
                console.log("Usuário não encontrada")
            else
                console.log(dados[res])
        }, null,
        [{ 'name': 'cpf', 'type': 'string' }])
    .addItem(
        opcoes[3],
        (cpf) => {
            let res = deletebycpf(dados, cpf)
            if (res !== -1) {
                console.log("Usuário deletado")
                dados = rmnull(dados)
            }
            else
                console.log("Operação não realizada")
        }, null,
        [{ 'name': 'cpf', 'type': 'string' }])
    .addItem(
        opcoes[4],
        (_cpf, _nome, _rg, _idade) => {
            let res = binsearch(dados, _cpf)
            if (res !== -1) {
                console.log("Dados Atualizados.")
                dados[res].nome = _nome
                dados[res].idade = _idade
                dados[res].rg = _rg

            }
            else {
                console.log("Usuário cadastrado.")
                let o = {
                    cpf: _cpf,
                    nome: _nome,
                    idade: _idade,
                    rg: _rg
                }
                dados = addend(dados, o)
            }
        }, null,
        [{ 'name': '_cpf', 'type': 'string' }, { 'name': '_nome', 'type': 'string' },
        { 'name': '_rg', 'type': 'string' }, { 'name': '_idade', 'type': 'numeric' }])
    .addItem(opcoes[5], () => {
        let time
        time = timeoffunction(bubblesort, DB, "Bubble Sort")
        time = timeoffunction(selectionsort, DB, "Selection Sort")
        time = timeoffunction(insertionsort, DB, "Insertion Sort")
        time = timeoffunction(insertionsort, DB, "Merge Sort")
    })
    .disableDefaultPrompt()
    .start()


