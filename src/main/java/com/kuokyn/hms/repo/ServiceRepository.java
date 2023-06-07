package com.kuokyn.hms.repo;

import com.kuokyn.hms.entity.Servicee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<Servicee, String> {
}
