package com.stockanalysis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.stockanalysis.dao.UserregistrationRepository;
import com.stockanalysis.entity.UserRegistration;

@Service
public class UserRegistrationService implements CrudRegistrationService<UserRegistration, Integer> {

	@Autowired
	private UserregistrationRepository registrationRepository;

	@Override
	public UserRegistration create(UserRegistration t) {
		UserRegistration register = registrationRepository.save(t);
		return register;
	}

	@Override
	public List<UserRegistration> getAll() {
		return registrationRepository.findAll();
	}

	@Override
	public UserRegistration fetchById(Integer k) {
		UserRegistration registration = registrationRepository.findById(k).orElseThrow();
		return registration;
	}

	@Override
	public UserRegistration Update(UserRegistration updated, UserRegistration existing) {
		existing.setEmail(updated.getEmail());
		existing.setPassword(updated.getPassword());
		existing.setUserName(updated.getUserName());
		return registrationRepository.save(existing);
	}

	@Override
	public String delete(UserRegistration t) {
		registrationRepository.delete(t);
		return t.getRole() + t.getUserName() + " Deleted";
	}

	public UserRegistration login(String userName, String password) {
		UserRegistration found = registrationRepository.findByUserName(userName);
		if (found != null && found.getPassword().equals(password)) {
			return found;
		}
		return null;
	}

}
