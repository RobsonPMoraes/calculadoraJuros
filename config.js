function calcular() {
    let n1 = document.querySelector("#n1");
    let n2 = document.querySelector("#n2");

    var num1 = Number(n1.value);
    var num2 = Number(n2.value);
    var resultado = (num1 * num2) / 100;

    total.innerHTML = `${num2}% de ${num1} é igual a ${resultado}.`;
    ("<br>");

    if (num1 == "" || num2 == "") {
      total.innerHTML = `Por favor digite um valor válido!`;
    }
  }
  function calcular2() {
    let n3 = document.querySelector("#n3");
    let n4 = document.querySelector("#n4");

    var num3 = Number(n3.value);
    var num4 = Number(n4.value);
    var resultado2 = (num4 * 100) / num3;

    total2.innerHTML = `${num4} de ${num3} equivale a ${resultado2}%.`;
    ("<br>");
    if (num3 == "" || num4 == "") {
      total2.innerHTML = `Por favor digite um valor válido!`;
    }
  }