package com.cassio.padroesprojeto.service;

import com.cassio.padroesprojeto.model.Cliente;

public interface ClienteService {

    Iterable<Cliente> buscarTodos();

    Cliente buscarPorId(Long id);

    void inserir(Cliente cliente);

    void atualizar(Long id, Cliente cliente);

    void excluir(Long id);

}