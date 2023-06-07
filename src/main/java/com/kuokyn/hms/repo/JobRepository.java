package com.kuokyn.hms.repo;

import com.kuokyn.hms.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends JpaRepository<Job, String> {
    Job findByTitle(String title);
}
