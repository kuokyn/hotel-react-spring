package com.kuokyn.hms.service;

import com.kuokyn.hms.entity.Room;
import com.kuokyn.hms.repo.RoomRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
@AllArgsConstructor
public class RoomService {
    private RoomRepository roomRepository;
    
    public ResponseEntity<List<Room>> getAllRooms() {
        try {
            List<Room> rooms = new ArrayList<>(roomRepository.findAll());
            if (rooms.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(rooms, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        } 
    }
    
    public ResponseEntity<Room> getRoomById(Long id) {
        Optional<Room> room = roomRepository.findById(id);
        return room.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public Long getRoomsAmount() {
        return roomRepository.count();
    }

    /*public ResponseEntity<Room> createRoom(Room room) {
        try {
            Room newRoom = roomRepository.save(room);
            return new ResponseEntity<>(newRoom, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<Room> updateRoom(Long id, Room room) {
        Optional<Room> roomData = roomRepository.findById(id);
        if (roomData.isPresent()) {
            Room _room = roomData.get();
            _room.setRoomType(room.getRoomType());
            _room.setChambers(room.getChambers());
            _room.setPeople(room.getPeople());
            return new ResponseEntity<>(roomRepository.save(_room), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<HttpStatus> deleteRoom(Long id) {
        try {
            roomRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/
}
