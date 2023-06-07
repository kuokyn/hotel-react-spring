package com.kuokyn.hms.service;
import com.kuokyn.hms.repo.ServiceRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.kuokyn.hms.entity.Servicee;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ServiceService {

    private ServiceRepository serviceRepository;

    public ResponseEntity<List<Servicee>> getAllServices() {
        try {
            List<Servicee> Services = new ArrayList<>(serviceRepository.findAll());
            if (Services.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(Services, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<Servicee> getServiceById(String name) {
        Optional<Servicee> Service = serviceRepository.findById(name);
        return Service.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

}
