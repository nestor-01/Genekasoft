package com.geneka.user.ws;

import java.util.List;

import com.geneka.common.util.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.geneka.model.User;
import com.geneka.user.bo.UserEngine;
import com.geneka.user.bs.UserService;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


@RestController
@EnableWebMvc
@RequestMapping("user")
public class UserWS {

	@Autowired
	UserEngine userEngine;
	
	@Autowired
	UserService userService;
	
	private static final Logger logger = LoggerFactory
			.getLogger(UserWS.class);

	@RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
	public @ResponseBody List<User> getAllUsers() throws Exception
	{
		return userService.getAllUsers();
	}
	
	@RequestMapping(value = "/getUserById", method = RequestMethod.POST)
	public @ResponseBody User getUserById(@RequestParam("id") Integer id) throws Exception
	{
		return userService.getUserById(id);
	}
	
	@RequestMapping(value = "/saveUser", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Response saveUser(@RequestBody User user)
    {
        Response response = new Response();

        try {
            userService.saveUser(user);
            return response.setStatus(Response.OK);
        }
        catch (Exception e)
        {
            return response.setStatus(Response.EXCEPTION).setMessage(e.getMessage());
        }
	}
	
	@RequestMapping(value = "/loginUser", method = RequestMethod.POST)
	public @ResponseBody Response loginUser(@RequestParam("email") String email, @RequestParam("password") String password)
    {
        Response response = new Response();

        try
        {
            if(userService.loginUser(email, password))
            {
                return response.setStatus(Response.OK);
            }
            else
            {
                return response.setStatus(Response.ERROR).setMessage("Usuario o contraseña incorrecta");
            }
        }
        catch (Exception e)
        {
            return response.setStatus(Response.EXCEPTION).setMessage(e.getMessage());
        }
	}
}
