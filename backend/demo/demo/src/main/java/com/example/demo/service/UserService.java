package com.example.demo.service;

import com.example.demo.domain.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userrepository;
    public User logincheck(User logindetails)
    {
        User users=userrepository.findusernameandpasword(logindetails.getUsername(),logindetails.getPassword());
        return users;

    }

}
