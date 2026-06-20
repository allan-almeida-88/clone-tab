const calculadora = require("../models/calculadora.js");

test("Teste soma 2 + 2 = 4", () => {
  expect(calculadora.soma(2, 2)).toBe(4);
});

test("Passando string para função númerica, esperado erro", () => {
  expect(calculadora.soma("2", "2")).toBe("Error");
});

test("Teste subtração 2 + 2 = 4", () => {
  expect(calculadora.subtracao(2, 2)).toBe(0);
});
