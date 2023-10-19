function botao1(){
    var num = 1
    var i = 11
    while(num < i){
        i--
    alert(i)
    }
    alert("Feliz Ano Novo!")
}

function botao2(){
    let num = window.prompt()
    for (let i = 0; i <=10; i++){
        let x = num * i
        alert(num+" X " + i + " = " + x)
    }
}

function botao3(){
    let soma = 0;
    let numero = 2;

    while (numero <= 100) {
    soma += numero;
    numero += 2;
    }
    alert("A soma dos primeiros 50 números pares é: "+ soma);
}
function botao4(){
        let num = window.prompt()
        let divisores = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisores++;
            }
        }
        if (divisores === 2) {
            console.log(num + " é primo");
        } else {
            console.log(num + " não é primo");
        }
    }
    function botao5() {
        let n = window.prompt()
        let a = 0
        let b = 1
        let c = 0
        console.log(a);
        console.log(b);
        while ((n-2) > 0) {
            c = a + b;
            console.log(c);
            a = b;
            b = c;
            n--
        }
    }
    
    

