package com.stockanalysis.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "admin_registration_detail")
public class AdminRegistration {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int adminId;
	private String role;
	@Column(unique = true)
	private String userName;
	@Column(unique = true)
	private String email;
	private String password;

	public AdminRegistration() {
		// TODO Auto-generated constructor stub
	}

	public AdminRegistration(int adminId, String role, String userName, String email, String password) {
		super();
		this.adminId = adminId;
		this.role = role;
		this.userName = userName;
		this.email = email;
		this.password = password;
	}

	public int getAdminId() {
		return adminId;
	}

	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "AdminRegistration [adminId=" + adminId + ", role=" + role + ", userName=" + userName + ", email="
				+ email + ", password=" + password + "]";
	}

}
