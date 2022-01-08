console.clear();
var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto);

var contador = 1;
var tentativas = 3;

function Chutar(chute) {
	var elementoResultado = document.getElementById("resultado");
	var chute = parseInt(document.getElementById("valor").value);

	var elementoTentativas = document.getElementById("tentativas");
	var elementoChutados = document.getElementById("chutados");
	var elementoBotao = document.getElementById("botao");

	if (chute < 11 && chute > -1) {
		if (contador == 1) {
			elementoChutados.innerHTML = "Números chutados: " + chute;
			contador++;
		} else {
			elementoChutados.insertAdjacentHTML("beforeend", ", " + chute);
		}
	}

	if (chute == numeroSecreto) {
		elementoResultado.style.color = "green";
		elementoResultado.innerHTML = "FIM DE JOGO! Você venceu!";
		elementoBotao.insertAdjacentHTML(
			"afterend",
			'<button type="submit" onclick="tentarNovamente()" id="botao1">Tentar novamente</button>'
		);
		document.getElementById("botao").remove();
	} else if (chute > 10 || chute < 0) {
		elementoResultado.innerHTML = "Digite um número entre 0 e 10.";
	} else if (chute > numeroSecreto) {
		tentativas = --tentativas;
		if (tentativas == 0) {
			elementoTentativas.innerHTML = "Que pena, suas tentativas acabaram.";
			elementoResultado.style.color = "red";
			elementoResultado.innerHTML =
				"FIM DE JOGO! O computador venceu! O número secreto era " +
				numeroSecreto +
				"!";

			elementoBotao.insertAdjacentHTML(
				"afterend",
				'<button type="submit" onclick="tentarNovamente()" id="botao1">Tentar novamente</button>'
			);
			document.getElementById("botao").remove();
		} else {
			elementoResultado.style.color = "red";
			elementoResultado.innerHTML =
				"Que pena, você errou. O número que você chutou é maior que o número secreto!";
			elementoTentativas.innerHTML = "Você tem " + tentativas + " tentativas!";
		}
	} else {
		tentativas = --tentativas;
		if (tentativas == 0) {
			elementoTentativas.innerHTML = "Que pena, suas tentativas acabaram.";
			elementoResultado.style.color = "red";
			elementoResultado.innerHTML =
				"FIM DE JOGO! O computador venceu! O número secreto era " +
				numeroSecreto +
				"!";
			elementoBotao.insertAdjacentHTML(
				"afterend",
				'<button type="submit" onclick="tentarNovamente()" id="botao1">Tentar novamente</button>'
			);
			document.getElementById("botao").remove();
		} else {
			elementoResultado.style.color = "red";
			elementoResultado.innerHTML =
				"Que pena, você errou. O número que você chutou é menor que o número secreto!";
			elementoTentativas.innerHTML = "Você tem " + tentativas + " tentativas!";
		}
	}
}

function tentarNovamente() {
	document
		.getElementById("botao1")
		.insertAdjacentHTML(
			"afterend",
			'<button type="submit" onclick="Chutar(valor.value)"id="botao">Chutar</button>'
		);
	document.getElementById("botao1").remove();
	numeroSecreto = parseInt(Math.random() * 11);
	console.log(numeroSecreto);
	document.getElementById("tentativas").innerHTML = "Você tem 3 tentativas!";
	document.getElementById("chutados").innerHTML = "";
	document.getElementById("resultado").innerHTML = "";
	contador = 1;
	tentativas = 3;
}
