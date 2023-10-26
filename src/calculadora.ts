export class Calculadora {
  soma(a: number, b: number) {
    return a + b;
  }

  diferenca(a: number, b: number) {
    return a - b;
  }

  produto(a: number, b: number) {
    return a * b;
  }

  divisao(a: number, b: number) {
    if (b === 0) {
      throw new Error("Não é possível dividir por zero.");
    }

    return a / b;
  }
}
