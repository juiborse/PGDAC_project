package com.stockanalysis.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stockanalysis.entity.UserRegistration;

public interface UserregistrationRepository extends JpaRepository<UserRegistration, Integer> {
	UserRegistration findByUserName(String userName);
}
