package com.kuokyn.hms.repo;

import com.kuokyn.hms.entity.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, String> {
}
