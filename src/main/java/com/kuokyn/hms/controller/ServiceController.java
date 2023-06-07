package com.kuokyn.hms.controller;


import com.kuokyn.hms.entity.Room;
import com.kuokyn.hms.entity.Servicee;
import com.kuokyn.hms.service.RoomService;
import com.kuokyn.hms.service.ServiceService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ServiceController {
    private final ServiceService serviceService;

    @GetMapping("/admin/services")
    public ResponseEntity<List<Servicee>> getAllAdminRooms() {
        return serviceService.getAllServices();
    }

    @GetMapping("/admin/services/{id}")
    public ResponseEntity<Servicee> getAdminRoomById(@PathVariable("id") String id) {
        return serviceService.getServiceById(id);
    }


}
