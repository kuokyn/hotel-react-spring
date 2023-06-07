package com.kuokyn.hms.service;

import com.kuokyn.hms.entity.Job;
import com.kuokyn.hms.entity.Worker;
import com.kuokyn.hms.DTO.WorkerDTO;
import com.kuokyn.hms.repo.JobRepository;
import com.kuokyn.hms.repo.WorkerRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class WorkerService {
    private final WorkerRepository workerRepository;
    private final JobRepository jobRepository;

    public ResponseEntity<List<Worker>> getAllWorkers() {
        try {
            List<Worker> workers = new ArrayList<>(workerRepository.findAll());
            if (workers.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(workers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<Worker> getWorkerById(Long id) {
        Optional<Worker> worker = workerRepository.findById(id);
        return worker.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

    public ResponseEntity<Worker> createWorker(WorkerDTO worker) {
        try {
            Job job = jobRepository.findById(worker.getJob()).get();
            Worker newWorker = new Worker();
            newWorker.setJob(job);
            newWorker.setEmail((worker.getEmail()));
            newWorker.setPhone(worker.getPhone());
            newWorker.setName(worker.getName());
            newWorker.setSurname(worker.getSurname());
            workerRepository.save(newWorker);
            return new ResponseEntity<>(newWorker, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<Worker> updateWorker(Long id, WorkerDTO worker) {
        Optional<Worker> workerData = workerRepository.findById(id);
        if (workerData.isPresent()) {
            Worker _worker = workerData.get();
            _worker.setPhone(worker.getPhone());
            _worker.setEmail(worker.getEmail());
            _worker.setName(worker.getName());
            _worker.setSurname(worker.getSurname());
            _worker.setJob(jobRepository.findByTitle(worker.getJob()));
            return new ResponseEntity<>(workerRepository.save(_worker), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<HttpStatus> deleteWorker(Long id) {
        try {
            workerRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<HttpStatus> deleteAllWorkers() {
        try {
            workerRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

}
