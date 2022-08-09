package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public User checkUser(@Valid @RequestBody User user) {
        if(user.getEmail() == null || user.getPassword() == null)
        {
            return null;
        }
        else
        {
            User user1 = userRepository.activeuser(user.getEmail(), user.getPassword());
            if(user1 != null)
            {
                return user1;
            }
            else return null;
        }

    }


}
