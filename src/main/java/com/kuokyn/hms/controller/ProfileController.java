package com.kuokyn.hms.controller;

import com.kuokyn.hms.entity.User;
import com.kuokyn.hms.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ProfileController {

    private UserService userService;

    @PutMapping("/profile/edit")
    public ResponseEntity<User> updateProfile(@RequestBody User user) {
        return userService.updateProfile(user.getId(), user);
    }

    @DeleteMapping("/profile")
    public ResponseEntity<HttpStatus> deleteProfile(@RequestBody User user) {
        return userService.deleteUser(user.getId());
    }

}
