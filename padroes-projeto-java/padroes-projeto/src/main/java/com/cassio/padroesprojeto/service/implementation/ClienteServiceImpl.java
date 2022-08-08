package com.cassio.padroesprojeto.service.implementation;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cassio.padroesprojeto.model.Cliente;
import com.cassio.padroesprojeto.model.ClienteRepository;
import com.cassio.padroesprojeto.model.Endereco;
import com.cassio.padroesprojeto.model.EnderecoRepository;
import com.cassio.padroesprojeto.service.ClienteService;
import com.cassio.padroesprojeto.service.ViaCepService;

@Service
public class ClienteServiceImpl implements ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;
    @Autowired
    private EnderecoRepository enderecoRepository;
    @Autowired
    private ViaCepService viaCepService;

    @Override
    public Iterable<Cliente> buscarTodos() {
        return clienteRepository.findAll();
    }

    @Override
    public Cliente buscarPorId(Long id) {
        // Buscar Cliente por id.
        Optional<Cliente> cliente = clienteRepository.findById(id);
        return cliente.get();
    }

    @Override
    public void inserir(Cliente cliente) {
        saveClienteCep(cliente);
    }

    @Override
    public void atualizar(Long id, Cliente cliente) {
        // Buscar Cliente por id
        Optional<Cliente> clienteBd = clienteRepository.findById(id);
        if (clienteBd.isPresent()) {
            saveClienteCep(cliente);
        }
    }

    @Override
    public void excluir(Long id) {
        // Excluir Cliente por ID.
        clienteRepository.deleteById(id);
    }

    private void saveClienteCep(Cliente cliente) {
        // Verificar se o Endereco do Cliente já existe (pelo CEP).
        String cep = cliente.getEndereco().getCep();
        Endereco endereco = enderecoRepository.findById(cep).orElseGet(() -> {
            // Caso não exista o endereço, integrar com o ViaCEP e gravar.
            Endereco novoEndereco = viaCepService.consultarCep(cep);
            enderecoRepository.save(novoEndereco);
            return novoEndereco;
        });
        cliente.setEndereco(endereco);
        // Inserir/Alterar Cliente.
        clienteRepository.save(cliente);
    }

}