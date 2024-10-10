function calcularImposto() {   /* Esta linha declara uma nova função chamada calcularImposto, que pode ser chamada quando o usuário clica no botão para calcular o imposto.*/
    const valor = parseFloat(document.getElementById('valor').value); /*  para obter o elemento de entrada com o ID "valor" (um campo onde o usuário insere um número). value pega o texto inserido nesse campo. parseFloat() converte esse texto em um número decimal (float).*/
    const taxa = parseFloat(document.getElementById('taxa').value);  /* Similar à linha anterior, esta linha obtém o valor do campo de entrada com o ID "taxa" e o converte em um número decimal.*/

    if (isNaN(valor) || isNaN(taxa) || valor < 0 || taxa < 0) {  /*Esta linha verifica se valor ou taxa não são números (isNaN()) ou se são negativos. Se qualquer uma dessas condições for verdadeira, o bloco de código dentro do if será executado.*/
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos."; /*Mensagem de Erro: Se a validação falhar, esta linha atualiza o elemento com o ID "resultado" para exibir uma mensagem de erro, pedindo que o usuário insira valores válidos.*/
        return; /*Este comando return faz com que a função seja encerrada sem executar as linhas seguintes, evitando que o cálculo do imposto seja realizado se os dados de entrada não forem válidos.*/
    }

    const imposto = valor * (taxa / 100);    /*Se os valores forem válidos, esta linha calcula o imposto multiplicando o valor pela taxa (dividida por 100 para converter a porcentagem em decimal). O resultado é armazenado na variável imposto.*/
    document.getElementById('resultado').innerText = `Imposto devido: R$ ${imposto.toFixed(2)}`;    /* Esta linha atualiza o elemento com o ID "resultado" para mostrar o imposto calculado. toFixed(2) formata o número para ter duas casas decimais, garantindo que o valor do imposto apareça no formato monetário adequado.*/
}
