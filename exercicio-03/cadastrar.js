const fs = require('fs');

function criarFaturamento() {
  
  let faturamentos = [];

  try {
    
    const data = fs.readFileSync('faturamento.json');
    
    faturamentos = JSON.parse(data);

  } catch (error) {
    console.log(error);
  }
    
  function cadastrar(dia, valor) {
    
    const faturamentoDia = {
      dia: dia,
      valor: valor,
    };

    try {
     
      const faturamentoExistente = faturamentos.find(
        (faturamento) => faturamento.dia === faturamentoDia.dia
      );

      if (faturamentoExistente) {
        console.log('Valor já inserido para essa data');
      } else {
        
        faturamentos.push(faturamentoDia);
        
        fs.writeFileSync('faturamento.json', JSON.stringify(faturamentos), 'utf-8');
      }
    } catch (error) {
     
      console.log(error);
      
      let faturamentos = [faturamentoDia];
      
      fs.writeFileSync('faturamento.json', JSON.stringify(faturamentos), 'utf-8');
    }
  }

  function deletar(dia) {
    
    const faturamentoAtualizado = faturamentos.filter((data) => {
      if (dia === data.dia) {
        return false;
      } else {
        return true;
      }
    });
    
    fs.writeFileSync('faturamento.json', JSON.stringify(faturamentoAtualizado), 'utf-8');
  }

  return { cadastrar, deletar };
}

// Factory function:
const faturamento = criarFaturamento();

// Para cadastrar:  {dia} {valor}
faturamento.cadastrar(1, 1000);



// Para deletear: {escolher o dia}
faturamento.deletar();