package com.wabericode.crud.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wabericode.crud.example.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

	Product findByName(String name);
}
