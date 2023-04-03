/*
package com.kuokyn.hms.controller;
import com.kuokyn.hms.auth.AuthenticationRequest;
import com.kuokyn.hms.auth.AuthenticationResponse;
import com.kuokyn.hms.auth.AuthenticationService;
import com.kuokyn.hms.auth.RegisterRequest;
import com.kuokyn.hms.entity.Authority;
import com.kuokyn.hms.entity.User;
import com.kuokyn.hms.repo.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3001")
public class AccountController {
    @Autowired
    private UserRepository userRepository;

    private final AuthenticationService service;

//    @Autowired
//    private final BCryptPasswordEncoder bCryptPasswordEncoder;

   */
/* @PostMapping("/register")
    public long register(@RequestBody User user) {
        if(user == null || userRepository.findByPhone(user.getPhone()) != null) return -1;
        else {
            *//*
*/
/*user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            Authority userRole = authorityRepository.findAuthorityByTitle("ROLE_USER");
            List<Authority> roles = Arrays.asList(userRole);
            System.out.println("################# " + userRole.toString());
            user.setAuthorities(new HashSet<>(roles));
            userRepository.save(user);*//*
*/
/*
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
    }*//*

//    @GetMapping
//    public ResponseEntity<String> sayHello() {
//        return ResponseEntity.ok("Hello from secured endpoint");
//    }
    */
/*@PostMapping("/update")
    public void update(@RequestBody User user){
        if(userRepository.findById(user.getId()) != null) {
            userRepository.save(user);
        }

    }*//*

}*/
