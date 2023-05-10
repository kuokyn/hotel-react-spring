package com.kuokyn.hms.repo;

import com.kuokyn.hms.entity.Worker;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkerRepository extends JpaRepository<Worker,Long> {
}
