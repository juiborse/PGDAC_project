package com.stockanalysis.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stockanalysis.entity.AdminRegistration;

public interface AdminRegistrationRepository extends JpaRepository<AdminRegistration, Integer> {
	AdminRegistration findByUserName(String userName);

}
