package com.kuokyn.hms.repo;

import com.kuokyn.hms.entity.BufferBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BufferBookingRepository extends JpaRepository<BufferBooking, Long> {
}
