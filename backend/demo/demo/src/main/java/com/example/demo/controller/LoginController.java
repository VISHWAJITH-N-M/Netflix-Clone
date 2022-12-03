package com.example.demo.controller;

import com.example.demo.domain.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/")
public class LoginController {

    @Autowired
    private UserService userservice;
    @PostMapping(value="/login" , consumes = "application/JSON")

    public User usernamelogin(@RequestBody User users)
    {

        User found= userservice.logincheck(users);

        return found;
    }

}
