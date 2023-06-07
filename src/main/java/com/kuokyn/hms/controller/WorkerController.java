package com.kuokyn.hms.controller;

import com.kuokyn.hms.entity.Worker;
import com.kuokyn.hms.DTO.WorkerDTO;
import com.kuokyn.hms.service.WorkerService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class WorkerController {
    private WorkerService workerService;

    @GetMapping("/admin/workers")
    public ResponseEntity<List<Worker>> getAllWorkers() {
        return workerService.getAllWorkers();
    }

    @GetMapping("/admin/workers/{id}")
    public ResponseEntity<Worker> getWorkerById(@PathVariable("id") Long id) {
        return workerService.getWorkerById(id);
    }

    @PostMapping("/admin/workers")
    public ResponseEntity<Worker> createWorker(@RequestBody WorkerDTO worker) {
        return workerService.createWorker(worker);
    }

    @PutMapping("/admin/workers/{id}")
    public ResponseEntity<Worker> updateWorker(@PathVariable("id") Long id, @RequestBody WorkerDTO worker) {
        System.out.println(worker.toString());
        return workerService.updateWorker(id, worker);
    }

    @DeleteMapping("/admin/workers/{id}")
    public ResponseEntity<HttpStatus> deleteWorker(@PathVariable("id") Long id) {
        return workerService.deleteWorker(id);
    }

    @DeleteMapping("/admin/workers")
    public ResponseEntity<HttpStatus> deleteAllWorkers() {
        return workerService.deleteAllWorkers();

    }
}
