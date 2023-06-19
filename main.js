const form = document.getElementById('agenda')
const numero = []
const contato = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    const numeroTelefone = document.getElementById('numero-contato')
    const nomeContato = document.getElementById('nome-contato')
    
    numero.push(numeroTelefone.value)
    contato.push(nomeContato.value)

    let linha = '<tr>'
    linha += `<td> ${nomeContato.value} </td>`;
    linha += `<td> ${numeroTelefone.value} </td>`;
    linha += `</tr>`

    linhas += linha

    const corpoTab = document.querySelector('tbody')
    corpoTab.innerHTML = linhas

    numeroTelefone.value = ''
    nomeContato.value = ''
})