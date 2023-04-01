package com.kuokyn.hms.controller;
import com.kuokyn.hms.entity.User;
import com.kuokyn.hms.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AccountController {
    @Autowired
    private UserRepository userRepository;


    @RequestMapping(
            value = "/register",
            produces = "application/json",
            method = {RequestMethod.GET, RequestMethod.POST})
    public long register(@RequestBody User user) {
        if(user == null || userRepository.findByPhone(user.getPhone()) != null) return -1;
        else {
            return userRepository.save(user).getId();
        }
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        if(userRepository.findByPhone(user.getPhone()) == null) return null;
        else if(!userRepository.findByPhone(user.getPhone()).getPassword().equals(user.getPassword()))
            return null;
        else
            return userRepository.findByPhone(user.getPhone());
    }

    /*@PostMapping("/update")
    public void update(@RequestBody User user){
        if(userRepository.findById(user.getId()) != null) {
            userRepository.save(user);
        }

    }*/
}