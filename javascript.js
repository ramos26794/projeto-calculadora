//Função para adicionar o evento de clique nos números da calculadora
function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num; //Esta função serve para adicionar novos números sem excluir o número que foi adicionado anteriormente
}

//Função para limpar todos os números que foram inseridos na calculadora
function clean() {
    document.getElementById('resultado').innerHTML = "";
}

//Função para apagar um número por vez inserido na calculadora
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}


//Função para calcular todos os resultados da calculadora
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) 
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada...";
    }
}