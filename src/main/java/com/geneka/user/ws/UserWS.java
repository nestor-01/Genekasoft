package com.geneka.user.ws;


import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.geneka.common.util.DefaultContextImpl;
import com.geneka.common.util.Tools;
import com.geneka.model.User;
import com.geneka.user.bo.UserEngine;
import com.geneka.user.bs.UserService;



@RestController
@RequestMapping("user")
public class UserWS {

	@Autowired
	UserEngine userEngine;
	
	@Autowired
	UserService userService;
	
	private static final Logger logger = LoggerFactory
			.getLogger(UserWS.class);
	
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public @ResponseBody String test() throws Exception
	{
		List<User> lstUsers = userEngine.getUsers();
		return Tools.serializeToJSon(lstUsers);
	}
	
	@RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
	public @ResponseBody String getAllUsers() throws Exception
	{
		List<User> lstUsers = userService.getAllUsers();
		return Tools.serializeToJSon(lstUsers);
	}
	
	@RequestMapping(value = "/getUserById", method = RequestMethod.POST)
	public @ResponseBody String getUserById(@RequestParam("id") Integer id) throws Exception
	{
		User user = userService.getUserById(id);
		return Tools.serializeToJSon(user);
	}
	
	@RequestMapping(value = "/saveUser", method = RequestMethod.POST)
	public @ResponseBody String saveUser(@RequestBody String paramsNewUser)
	{
		Map<String, Object> attributesDef = new DefaultContextImpl();
		try
		{
			HashMap attributes = Tools.deserializeFromJSon(paramsNewUser, HashMap.class);
			attributesDef.putAll(attributes);
			Integer id = (Integer) attributesDef.get("id");
			String name = (String) attributesDef.get("name");
			String lastName = (String) attributesDef.get("lastName");
			String password = (String) attributesDef.get("password");
			String gender = (String) attributesDef.get("gender");
			String email = (String) attributesDef.get("email");
			String address = (String) attributesDef.get("address");
			String phone = (String) attributesDef.get("phone");
			Integer groupId = (Integer) attributesDef.get("groupId");
			String dateOfBirth = (String) attributesDef.get("datoOfBirth");
			userService.saveUser(id, name, lastName, password, gender, email, phone, 
					groupId, dateOfBirth);
		}
		catch (Exception e)
		{
			return e.getCause().toString();
		}
		return "ok";
	}
	
	@RequestMapping(value = "/loginUser", method = RequestMethod.POST)
	public @ResponseBody String loginUser(HttpServletResponse response, @RequestBody String paramsUser)
	{
        /*response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");*/

		Map<String, Object> attributesDef = new DefaultContextImpl();
		try
		{
			HashMap attributes = Tools.deserializeFromJSon(paramsUser, HashMap.class);
			attributesDef.putAll(attributes);
			String email = (String) attributesDef.get("email");
			String password = (String) attributesDef.get("password");
			return userService.loginUser(email, password).toString();
		}
		catch (Exception e)
		{
			e.printStackTrace();
			return e.getMessage();
		}
	}
	
	

}
