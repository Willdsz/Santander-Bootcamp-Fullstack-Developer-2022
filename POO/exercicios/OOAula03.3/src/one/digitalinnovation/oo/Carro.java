package one.digitalinnovation.oo;

/**
 * Classe de exemplo para o exercício da Aula 2 de Orientação a Objetos.
 */
//Cria a class Carro
class Carro {
//    Define os Atributos da Classe
    String cor;
    String modelo;
    int capacidadeTanque;

//    Declara o Construtor | Deixar os construtores logo abaixo dos atributos é uma boa prática
    Carro() {

    }
//  Sobrecarga do Construtor logo abaixo
    Carro(String cor, String modelo, int capacidadeTanque) {
        this.cor = cor;
        this.modelo = modelo;
        this.capacidadeTanque = capacidadeTanque;
    }

    void setCor(String cor) {
        this.cor = cor;
    }

    String getCor() {
        return cor;
    }

    void setModelo(String modelo) {
        this.modelo = modelo;
    }

    String getModelo() {
        return modelo;
    }

    void setCapacidadeTanque(int capacidadeTanque) {
        this.capacidadeTanque = capacidadeTanque;
    }

    int getCapacidadeTanque() {
        return capacidadeTanque;
    }

    double totalValorTanque(double valorCombustivel) {
        return capacidadeTanque * valorCombustivel;
    }
}
