//2) RESPOSTA:

function FibonacciCalc(value) {
  let sequencia = 0;
  let somador = 1;

  if(isNaN(value)) {
    console.log('Você precisa digitar somente números!');
    console.log('-------------------------------------');
    return;
  }
  
  if(value !== 'string') {
    value = parseInt(value);
  }

  while(sequencia <= value ) {
    
    if(sequencia === value) {
      console.log(`${value} - Esse número pertence a sequência de Fibonacci!`);
      console.log('--------------------------------------------------');
      return;
    }
    
    console.log(sequencia);
    
    soma = sequencia + somador;
    
    sequencia = somador;
    
    somador = soma;
  }

  console.log(`${value} - Esse número NÃO pertence a sequência de Fibonacci!`);
  console.log('-------------------------------------------------------');
  return;
}

FibonacciCalc('teste'); //retorno: "Você precisa digitar somente números!";

FibonacciCalc(3); //retorno: Esse número pertence a sequência de Fibonacci;

FibonacciCalc('5'); //retorno: Esse número pertence a sequência de Fibonacci;


FibonacciCalc(10);//retorno: Esse número NÃO pertence a sequência de Fibonacci;
