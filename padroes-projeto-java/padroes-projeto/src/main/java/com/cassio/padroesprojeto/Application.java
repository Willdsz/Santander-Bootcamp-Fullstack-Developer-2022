package com.cassio.padroesprojeto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

/**
 * Projeto criardo através do Spring Initializr
 * Incluido os seguintes módulos:
 *  - Spring Data JPA
 *  - H2 Database
 *  - Spring Web
 *  - OpernFeign
 */
@EnableFeignClients
@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
