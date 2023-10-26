import { Calculadora } from "../calculadora";

describe("Calculadora", () => {
  let calculadora: Calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  it("O resultado da soma entre dois números deve ser correto.", () => {
    expect(calculadora.soma(7, 2)).toBe(9);
  });

  it("O resultado da subtração entre dois números deve ser correto.", () => {
    expect(calculadora.diferenca(20, 8)).toBe(12);
  });

  it("A divisão não pode ser feita por zero.", () => {
    expect(() => calculadora.divisao(10, 0)).toThrowError(
      "Não é possível dividir por zero."
    );
  });

  it("O resultado da divisão entre dois números deve ser correto.", () => {
    expect(calculadora.divisao(15, 3)).toBe(5);
  });

  it("O resultado da multiplicação entre dois números deve ser correto.", () => {
    expect(calculadora.produto(5, 6)).toBe(30);
  });
});
