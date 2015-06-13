package com.geneka.user.bs;


import java.util.List;

import com.geneka.model.User;

public interface UserService {
	
	public List<User> getAllUsers()throws Exception;
	
	public User getUserById(Integer id)throws Exception;
	
	public List<User> getUserByName(String name, String lastName)throws Exception;
	
	public boolean saveUser(User user)throws Exception;
	
	public boolean saveUser(Integer id, String name, String lastName, String password, String gender, String email,
							String phone, Integer groupId, String dateOfBirth)throws Exception;
	
	public boolean deleteUser(Integer userId)throws Exception;
	
	public Boolean loginUser(String email, String password)throws Exception;

	public boolean inactive(Integer userId, Boolean active) throws Exception;
	
}
