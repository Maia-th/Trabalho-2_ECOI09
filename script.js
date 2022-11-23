function Imc() {
  nome = document.getElementById("nome").value;
  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;
  resp = parseFloat(peso) / Math.pow(altura, 2);
  resp = Math.round(resp * 10) / 10;

  if (resp < 18.5) classific = "Abaixo do peso";
  else if (resp >= 18.5 && resp <= 24.9) classific = "Peso ideal (Parabéns)";
  else if (resp >= 25 && resp <= 29.9) classific = "levemente acima do peso";
  else if (resp >= 30 && resp <= 34.9) classific = "Obesidade grau I";
  else if (resp >= 35 && resp <= 39.9) classific = "Obesidade grau II (Severa)";
  else classific = "Obesidade grau III (Mórbida)";

  if (peso > 0 && altura > 0) {
    const tbody = document.querySelector("tbody");
    const newLinha = document.createElement("tr");
    const nomeL = document.createElement("td");
    const altL = document.createElement("td");
    const pesL = document.createElement("td");
    const resL = document.createElement("td");
    const classL = document.createElement("td");
    nomeL.innerText = nome;
    newLinha.appendChild(nomeL);
    altL.innerText = altura + "M";
    newLinha.appendChild(altL);
    pesL.innerText = peso + " KG";
    newLinha.appendChild(pesL);
    resL.innerText = resp;
    newLinha.appendChild(resL);
    classL.innerText = classific;
    newLinha.appendChild(classL);
    tbody.appendChild(newLinha);
    clear();
  } else alert("Valores invalidos!");
}

function manipulaJson(array) {
  array.forEach((array) => {
    document.getElementById("nome").value = array.nome;
    document.getElementById("peso").value = array.peso;
    document.getElementById("altura").value = array.altura;
    Imc();
  });
}

function arqJson() {
  fetch("./imc-data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => manipulaJson(data));
}

function clear() {
  document.getElementById("nome").value = "";
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}
