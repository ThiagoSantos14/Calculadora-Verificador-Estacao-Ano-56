//Função calculadora
const btnCalculadora = document.querySelector('.btn-calc');

btnCalculadora.addEventListener('click', function(event) {
    event.preventDefault();

    alert('Você clicou no botão da calculadora!');
    const num1 = prompt('Digite um valor: ');
    const num2 = prompt('Digite outro valor: ');
    const operacao = prompt('Qual oeração deseja realizar: \n\n 1: Soma \n 2: Subtração \n 3: Multiplicação \n 4: Divisão');

    if(operacao === '1') {
        const soma = parseInt(num1) + parseInt(num2);
        alert(`Você escolheu soma \nResultado: ${soma}`);
    }else if (operacao === '2') {
        const subtracao = parseInt(num1) - parseInt(num2);
        alert(`Você escolheu subtração \nResultado: ${subtracao}`);
    }else if (operacao === '3') {
        const mult = parseInt(num1) * parseInt(num2);
        alert(`Você escolheu multiplicação \nResultado: ${mult}`);
    }else if (operacao === '4') {
        const divisao = parseInt(num1) / parseInt(num2);
        alert(`Você escolheu divisão \n Resultado: ${divisao}`);
    }else {
        alert('Digite uma operação válida!');
    }
});


//Função Estação do Ano
const btnEstacao = document.querySelector('.btn-estacao');

btnEstacao.addEventListener('click', function(event) {
    event.preventDefault();

    alert('Você clicou no botão da Estação do Ano!')
    const inputMes = prompt('Em qual mês você está?:\n1: Janeiro \n2: Fevereiro \n3: Março \n4: Abril \n5: Maio \n6: Junho \n7: Julho \n8: Agosto \n9: Setembro \n10: Outubro \n11: Novembro \n12: Dezembro');

    if(inputMes === '1' || inputMes === '2' || inputMes === '3') {
        alert(`Você está no mês ${inputMes}, Então está no "Verão"`);
    }else if(inputMes === '4' || inputMes === '5' || inputMes === '6') {
        alert(`Você está no mês ${inputMes}, Então está no "Outono"`);
    }else if(inputMes === '7' || inputMes === '8' || inputMes === '9') {
        alert(`Você está no mês ${inputMes}, Então está no "Inverno"`);
    }else if(inputMes === '10' || inputMes === '11' || inputMes === '12') {
        alert(`Você está no mês ${inputMes}, Então está no "Primavera"`);
    }else {
        alert('Digite uma operação válida!');
    }
});