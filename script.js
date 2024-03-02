const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const botao4 = document.getElementById("botao4");
const resultado = document.getElementById("resultado");


let soma = 0;

botao1.addEventListener("click", function() {
    soma += 1;
    atualizarResultado();
});

botao2.addEventListener("click", function() {
    soma += 2;
    atualizarResultado();
});

botao3.addEventListener("click", function() {
    soma += 3;
    atualizarResultado();
});

botao4.addEventListener("click", function() {
    soma += 4;
    atualizarResultado();
});

function atualizarResultado() {
    resultado.textContent = soma;

    // Armazenar o resultado em um arquivo Excel

    const data = new Date();
    const dataHora = data.toLocaleDateString() + " " + data.toLocaleTimeString();
    const ExcelJS = require("exceljs");
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Resultados");
    

    worksheet.columns = [
        { header: "Valor", key: "valor", width: 10 },
        { header: "Data e Hora", key: "data_hora", width: 20 },
    ];

    worksheet.addRow({ valor: soma, data_hora: dataHora });

    workbook.xlsx.writeFile("resultados.xlsx");
}
