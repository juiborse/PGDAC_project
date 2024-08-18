package com.stockanalysis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stockanalysis.entity.AdminRegistration;
import com.stockanalysis.entity.UserRegistration;
import com.stockanalysis.service.UserRegistrationService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserRegistrationController {

	@Autowired
	private UserRegistrationService registrationservice;

	@PostMapping("/new/create")
	public ResponseEntity<?> create(@RequestBody UserRegistration newregistration) {
		UserRegistration registerUser = registrationservice.create(newregistration);
		return new ResponseEntity<>(registerUser, HttpStatus.OK);
	}

	@GetMapping("/getalladmins")
	public ResponseEntity<?> getAlladmin() {
		List<UserRegistration> found = registrationservice.getAll();
		return new ResponseEntity<>(found, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getAdminById(@PathVariable("id") int id) {
		UserRegistration found = registrationservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(found, HttpStatus.OK);
	}

	@PutMapping("update/{id}")
	public ResponseEntity<?> Update(@PathVariable int id, @RequestBody UserRegistration updated) {
		UserRegistration found = registrationservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(registrationservice.Update(updated, found), HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> Delete(@PathVariable int id) {
		UserRegistration found = registrationservice.fetchById(id);
		if (found == null) {
			System.out.println("Not Found");
		}
		return new ResponseEntity<>(registrationservice.delete(found), HttpStatus.OK);
	}

	@PostMapping("/login")
	public UserRegistration login(@RequestBody AdminRegistration loginRequest) {
		return (registrationservice.login(loginRequest.getUserName(), loginRequest.getPassword()));
	}

}
