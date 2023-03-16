const faturamentoPorEstado = [
    {estado:'SP', valor: 67_836.43},
    {estado:'RJ', valor: 36_678.66},
    {estado:'MG', valor: 29_229.88},
    {estado:'ES', valor: 27_165.48},
    {estado:'outros', valor: 19_849.53},
  ];
  
  const somaFaturamento = faturamentoPorEstado.reduce((sum, estado) => sum + estado.valor, 0);
  
  const percentuais = faturamentoPorEstado.map((estado) => {
    
    const percentual = (estado.valor / somaFaturamento) * 100;
    
    return { estado: estado.estado, percentual: percentual };
  });
  
  const percentuaisFormatados = percentuais.map((estado) => {
    const percentualFormatado = estado.percentual.toFixed(2).replace('.', ',');
    return { estado: estado.estado, percentual: percentualFormatado };
  });
  
  percentuaisFormatados.forEach((estado) => {
    console.log(`${estado.estado}: ${estado.percentual}%`);
  });
