package com.kuokyn.hms.repo;

import com.kuokyn.hms.entity.Booking;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository
        extends JpaRepository<Booking, Long>, JpaSpecificationExecutor<Booking> {

    List<Booking> findBookingById(Long id);

    @Query(value = "SELECT * FROM Booking WHERE user_id= (SELECT id FROM User WHERE phone=:phone)",
            nativeQuery = true)
    List<Booking> findBookingByUserPhone(@Param("phone") String phone);

    void deleteAllByUserId(Long id);

    @Query(value = "SELECT * FROM booking ORDER BY id DESC LIMIT 3",
            nativeQuery = true)
    List<Booking> findLastThree();

    @Query(value="SELECT SUM(price) FROM booking\n" +
            "JOIN Room ON booking.room_id=room.id\n" +
            "JOIN room_type ON room.room_type_title=room_type.title",
    nativeQuery = true)
    Double getAllRevenue();
}
