const {performance} = require('perf_hooks');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Insira o número fatorial: ', num => {
    const ini = performance.now();
    let fatorial = 1;
    for(let i=1; i<=num; i++) {
        fatorial = fatorial * i;
    } 
    const fim = performance.now();
    
    console.log("----------------------")
    console.log(`Resultado do fatorial de ${num} é ${fatorial}`)
    console.log(`Tempo de execução...  ${fim-ini} nanossegundos`)

    readline.close();
});