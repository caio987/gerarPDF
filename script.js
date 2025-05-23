let totalGeral = 0;
let contador = 1;
const relatorio = document.getElementById('relatorio');

function adicionarItem() {
  const descricao = document.getElementById("descricao").value;
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const valor = parseFloat(document.getElementById("valor").value);

  if (!descricao || isNaN(quantidade) || isNaN(valor)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  const tabela = document.querySelector("main table");
  const linha = tabela.insertRow(tabela.rows.length - 2);
  linha.classList.add("compra");

  const celulaDescricao = linha.insertCell(0);
  const celulaQuantidade = linha.insertCell(1);
  const celulaValor = linha.insertCell(2);

  celulaDescricao.textContent = descricao;
  celulaQuantidade.textContent = quantidade;
  celulaValor.textContent = (quantidade * valor).toFixed(2).replace(".", ",");

  totalGeral += quantidade * valor;
  document.getElementById("total").textContent = totalGeral.toFixed(2).replace(".", ",");

  document.getElementById("descricao").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("valor").value = "";

}

function gerar(pdf = false, print = false) {
  relatorio.style.visibility = 'visible';
  relatorio.style.position = 'static';

  if (pdf) html2pdf().from(relatorio).save();
  else if (print) window.print();
}
