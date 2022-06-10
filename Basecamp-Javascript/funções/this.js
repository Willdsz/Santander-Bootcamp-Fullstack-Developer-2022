function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	idade: 13,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));

// call - colocamos o objeto ao qual desejamos que o this se refira

// Apply - Enquanto no call os argumentos sao enviados separados por virgula, no apply eles são enviados por meio de arrays

// Bind - Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro
