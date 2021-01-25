package com.exam.friendo.controller;

import java.security.Principal;

import com.exam.friendo.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import com.exam.friendo.model.User;

@RestController
@RequestMapping
public class UserController {

	private UserRepository userRepository;

	public UserController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@GetMapping("/user")
	@ResponseBody
	public User user(Principal principal) {
		User user = userRepository.findByEmail(principal.getName());
		System.out.println(user);
		return user;
	}
	@GetMapping(value = "/{path:[^\\.]*}")
	public String redirect() {
		return "forward:/";
	}

}