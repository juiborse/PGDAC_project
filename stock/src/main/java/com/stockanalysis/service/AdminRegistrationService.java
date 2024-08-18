package com.stockanalysis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stockanalysis.dao.AdminRegistrationRepository;
import com.stockanalysis.entity.AdminRegistration;

@Service
public class AdminRegistrationService implements CrudRegistrationService<AdminRegistration, Integer> {

	@Autowired
	private AdminRegistrationRepository registrationRepository;

	@Override
	public AdminRegistration create(AdminRegistration t) {
		AdminRegistration register = registrationRepository.save(t);
		return register;
	}

	@Override
	public List<AdminRegistration> getAll() {
		return registrationRepository.findAll();
	}

	@Override
	public AdminRegistration fetchById(Integer k) {
		AdminRegistration registration = registrationRepository.findById(k).orElseThrow();
		return registration;
	}

	@Override
	public AdminRegistration Update(AdminRegistration updated, AdminRegistration existing) {
		existing.setEmail(updated.getEmail());
		existing.setPassword(updated.getPassword());
		existing.setUserName(updated.getUserName());
		return registrationRepository.save(existing);
	}

	@Override
	public String delete(AdminRegistration t) {
		registrationRepository.delete(t);
		return t.getRole() + t.getUserName() + " Deleted";
	}

	public AdminRegistration login(String userName, String password) {
		AdminRegistration found = registrationRepository.findByUserName(userName);
		if (found != null && found.getPassword().equals(password)) {
			return found;
		}
		return null;
	}

}
