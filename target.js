// 1. Cálculo da variável SOMA
function calcularSoma() {
  let INDICE = 13,
    SOMA = 0,
    K = 0;
  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }
  console.log('Valor final de SOMA:', SOMA);
}

calcularSoma();

// 2. Verificar se um número pertence à sequência de Fibonacci
function pertenceFibonacci(numero) {
  let a = 0,
    b = 1,
    temp;
  while (b < numero) {
    temp = a + b;
    a = b;
    b = temp;
  }
  console.log(
    numero === b
      ? 'Pertence à sequência de Fibonacci'
      : 'Não pertence à sequência de Fibonacci'
  );
}

pertenceFibonacci(21); // Exemplo

// 3. Processamento de faturamento mensal
const faturamentoMensal = require('./faturamento.json'); // JSON com faturamento diário

function analisarFaturamento(dados) {
  let valores = dados.filter((dia) => dia.valor > 0).map((dia) => dia.valor);
  let menor = Math.min(...valores);
  let maior = Math.max(...valores);
  let media = valores.reduce((acc, val) => acc + val, 0) / valores.length;
  let diasAcimaMedia = valores.filter((valor) => valor > media).length;

  console.log(`Menor faturamento: ${menor}`);
  console.log(`Maior faturamento: ${maior}`);
  console.log(`Dias acima da média: ${diasAcimaMedia}`);
}

analisarFaturamento(faturamentoMensal);

// 4. Cálculo do percentual de faturamento por estado
const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularPercentual(faturamento) {
  let total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);
  Object.entries(faturamento).forEach(([estado, valor]) => {
    let percentual = ((valor / total) * 100).toFixed(2);
    console.log(`${estado}: ${percentual}%`);
  });
}

calcularPercentual(faturamentoEstados);

// 5. Inverter uma string
function inverterString(str) {
  let invertida = '';
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  console.log('String invertida:', invertida);
}

inverterString('Amazon'); // Exemplo
