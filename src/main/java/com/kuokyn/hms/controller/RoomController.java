package com.kuokyn.hms.controller;

import com.kuokyn.hms.entity.Room;
import com.kuokyn.hms.service.RoomService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
//@CrossOrigin(origins = "http://localhost:3000")
public class RoomController {

    private RoomService roomService;

    @GetMapping("/rooms")
    public ResponseEntity<List<Room>> getAllRooms() {
        return roomService.getAllRooms();
    }

    @GetMapping("/rooms/{id}")
    public ResponseEntity<Room> getRoomById(@PathVariable("id") Long id) {
        return roomService.getRoomById(id);
    }

    /*@PostMapping("/rooms")
    public ResponseEntity<Room> createRoom(@RequestBody Room room) {
        return roomService.createRoom(room);
    }

    @PutMapping("/rooms/{id}")
    public ResponseEntity<Room> updateRoom(@PathVariable("id") Long id, @RequestBody Room room) {
        return roomService.updateRoom(id, room);
    }

    @DeleteMapping("/rooms/{id}")
    public ResponseEntity<HttpStatus> deleteRoom(@PathVariable("id") Long id) {
        return roomService.deleteRoom(id);
    }*/
}
