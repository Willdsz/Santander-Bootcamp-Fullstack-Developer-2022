package dio;

public class Main {

    public static void main(String[] args) {
        Conta cc = new ContaCorrente();
        Conta poupanca = new ContaPoupanca();

        cc.depositar(100);
        cc.sacar(40);
        cc.transferir(40, poupanca);


        cc.imprimirExtrato();
        poupanca.imprimirExtrato();

    }
}
