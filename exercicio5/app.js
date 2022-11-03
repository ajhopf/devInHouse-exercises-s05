import CalculadoraDeArea from './CalculadoraDeArea.js';

const triangulo = new CalculadoraDeArea('triangulo', 6, 8);

const quadrado = new CalculadoraDeArea('quadrado', 4, 4);

const retangulo = new CalculadoraDeArea('retangulo', 4, 6);

const areaTriangulo = triangulo.calcular();
const areaQuadrado = quadrado.calcular();
const areaRetangulo = retangulo.calcular();

console.log('A área do triângulo é: ' + areaTriangulo + 'cm²');
console.log('A área do quadrado é: ' + areaQuadrado + 'cm²');
console.log('A área do retangulo é: ' + areaRetangulo + 'cm²');
