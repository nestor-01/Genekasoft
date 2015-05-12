package com.geneka.user.bo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.geneka.common.dao.Dao;
import com.geneka.model.User;

public class UserEngineImpl implements UserEngine {

	@Autowired
	Dao dao; 
	
	public List<User> getUsers() {
		List<User> lstUsers = dao.getAllItems(User.class);
		return lstUsers;
	}

}
