const fs = require('fs');


function calcularFaturamento() {
    try {
        const data = fs.readFileSync('faturamento.json');
        
        const faturamentos = JSON.parse(data).filter((data) => data.valor !== 0);
        
        const valores = faturamentos.map((data) => data.valor);

        const dias = faturamentos.map((data) => data.dia);
        
        const totalFaturado = valores.reduce((total, retorno) => total + retorno);

        const menorValor = parseFloat(Math.min(...valores).toFixed(2));
        const maiorValor = parseFloat(Math.min(...valores).toFixed(2));
        const media = parseFloat(totalFaturado / dias.length).toFixed(2);
    
        console.log(`O total faturado foi de R$:${totalFaturado.toFixed(2)}`);

        console.log(`O valor mínimo foi de R$:${maiorValor}`);

        console.log(`A média dos valores pelos dias faturados são de R$:${media}`);

    } catch (error) {
        console.log(error);
    }
}

calcularFaturamento();