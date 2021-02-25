

const tabelaCadastro = document.querySelector('table')
tabelaCadastro.addEventListener('dblclick',e =>{
    if(e.target.parentNode.tagName != 'TR' || e.target.tagName == 'TH' ){
        alert('clique duplo tem que ser dentro de uma celula valida para excluir uma linha')
        return;
    }

    e.target.parentNode.remove()
})


const botaoEnviar = document.querySelector('button')
botaoEnviar.addEventListener('click', ()=>{
    
    
    //inserir nome e email
    const campoTabela = document.getElementById('elementosCadastrados')
    const inputNome = document.querySelector('input[name=nome]')
    const nome = inputNome.value
    const textNome = document.createTextNode(nome)

    const tdNome = document.createElement('td')
    const tdEmail = document.createElement('td')

    const tr = document.createElement('tr')

    const inputEmail = document.querySelector('input[name=email]')
    const email = inputEmail.value
    const textEmail = document.createTextNode(email)
    tdNome.appendChild(textNome)
    tr.appendChild(tdNome)
    tdEmail.appendChild(textEmail)
    tr.appendChild(tdEmail)
  
    if(nome == '' || email ==''){
        alert('Preencha os os dois campos e clique em Enviar!')
        return;
    }

    campoTabela.appendChild(tr)
    inputNome.value = ''
    inputEmail.value = ''
})
