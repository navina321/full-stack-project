package com.example.disneyattractions;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication ()
public class DisneyAttractionsApplication {
	public static void main(String[] args) {
		SpringApplication.run(DisneyAttractionsApplication.class, args);
	}

}
