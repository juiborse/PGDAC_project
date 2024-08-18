package com.stockanalysis.service;

import java.util.List;

public interface CrudRegistrationService<T, K> {

	T create(T t);

	List<T> getAll();

	T fetchById(K k);

	T Update(T t1, T t2);

	String delete(T t);
}
