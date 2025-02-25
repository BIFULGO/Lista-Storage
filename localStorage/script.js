function salvarNome(){
    //Captura o valor do input Nome
    var itensParaComprar = document.getElementById('inputNome').value
    //Colocar o valor da var dentro da chave Nome
    localStorage.setItem('item',itensParaComprar)//Salvamos

    //Captura o valor do input Nome
    var itensParaComprar2 = document.getElementById('inputNome2').value
    //Colocar o valor da var dentro da chave Nome
    localStorage.setItem('item2',itensParaComprar2)//Salvamos

    //Captura o valor do input Nome
    var itensParaComprar3 = document.getElementById('inputNome3').value
    //Colocar o valor da var dentro da chave Nome
    localStorage.setItem('item3',itensParaComprar3)//Salvamos

  //Captura o valor do input Nome
  var itensParaComprar4 = document.getElementById('inputNome4').value
  //Colocar o valor da var dentro da chave Nome
  localStorage.setItem('item4',itensParaComprar4)//Salvamos


  //Captura o valor do input Nome
  var itensParaComprar5 = document.getElementById('inputNome5').value
  //Colocar o valor da var dentro da chave Nome
  localStorage.setItem('item5',itensParaComprar5)//Salvamos


}

function mostrarNome(){
    var itensParaComprar = localStorage.getItem('item')
    var itensParaComprar2 = localStorage.getItem('item2')
    var itensParaComprar3 = localStorage.getItem('item3')
    var itensParaComprar4 = localStorage.getItem('item4')
    var itensParaComprar5 = localStorage.getItem('item5')

    if (itensParaComprar, itensParaComprar2,itensParaComprar3,itensParaComprar4,itensParaComprar5) {
        document.getElementById('resultado').textContent = `Nome salvo : ${itensParaComprar}`
        document.getElementById('resultado2').textContent = `Nome salvo : ${itensParaComprar2}`
        document.getElementById('resultado3').textContent = `Nome salvo : ${itensParaComprar3}`
        document.getElementById('resultado4').textContent = `Nome salvo : ${itensParaComprar4}`
        document.getElementById('resultado5').textContent = `Nome salvo : ${itensParaComprar5}`
    } else{
        document.getElementById('resultado').textContent = 'Nenhum nome salvo'
        document.getElementById('resultado2').textContent = 'Nenhum nome salvo'
        document.getElementById('resultado3').textContent = 'Nenhum nome salvo'
        document.getElementById('resultado4').textContent = 'Nenhum nome salvo'
        document.getElementById('resultado5').textContent = 'Nenhum nome salvo'

    }

}

function limparNome(){
    localStorage.removeItem('item')
    document.getElementById('resultado').textContent = 'Item removido';
    resultado.style.color = 'red';

    localStorage.removeItem('item2')
    document.getElementById('resultado2').textContent = 'Item removido';
    resultado2.style.color = 'red';

    localStorage.removeItem('item3')
    document.getElementById('resultado3').textContent = 'Item removido';
    resultado3.style.color = 'red';

    localStorage.removeItem('item4')
    document.getElementById('resultado4').textContent = 'Item removido';
    resultado4.style.color = 'red';

    localStorage.removeItem('item5')
    document.getElementById('resultado5').textContent = 'Item removido';
    resultado5.style.color = 'red';
    
}

function Excluirnome(){
    localStorage.removeItem('item')
    document.getElementById('resultado').textContent = 'Item removido';
    resultado.style.color = 'red';
}

function Excluirnome2(){
    localStorage.removeItem('item2')
    document.getElementById('resultado2').textContent = 'Item removido';
    resultado2.style.color = 'red';
}

function Excluirnome3(){
    localStorage.removeItem('item3')
    document.getElementById('resultado3').textContent = 'Item removido';
    resultado3.style.color = 'red';
}

function Excluirnome4(){
    localStorage.removeItem('item4')
    document.getElementById('resultado4').textContent = 'Item removido';
    resultado4.style.color = 'red';
}

function Excluirnome5(){
    localStorage.removeItem('item5')
    document.getElementById('resultado5').textContent = 'Item removido';
    resultado5.style.color = 'red';
}