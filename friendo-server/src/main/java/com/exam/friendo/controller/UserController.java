package com.exam.friendo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.friendo.model.User;

@CrossOrigin()
@RestController
@RequestMapping({ "/user" })
public class UserController {

	private List<User> Users = createList();

	@GetMapping(produces = "application/json")
	public List<User> firstPage() {
		return Users;
	}

	@GetMapping(produces = "application/json")
	@RequestMapping({ "/validateLogin" })
	public User validateLogin() {
		return new User();
	}

	@DeleteMapping(path = { "/{id}" })
	public User delete(@PathVariable("id") String id) {
		User deleted = null;
		Optional<User> toDelete = Users.stream().filter(u -> !u.equals(id)).findFirst();
		if (toDelete.isPresent()) {
			Users.remove(toDelete.get());
		}

		return toDelete.get();
	}

	@PostMapping
	public User create(@RequestBody User user) {
		user.setId(UUID.randomUUID().toString());
		Users.add(user);
		return user;
	}

	private static List<User> createList() {
		List<User> users = new ArrayList<>();
		User elmehdi = new User(UUID.randomUUID().toString(),"Elmehdi","enable");
		User asmaa = new User(UUID.randomUUID().toString(),"Asmaa","enable");

		users.add(elmehdi);
		users.add(asmaa);
		return users;
	}

}