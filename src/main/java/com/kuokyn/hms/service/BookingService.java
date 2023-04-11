package com.kuokyn.hms.service;

import com.kuokyn.hms.entity.Booking;
import com.kuokyn.hms.entity.Room;
import com.kuokyn.hms.entity.RoomType;
import com.kuokyn.hms.repo.BookingRepository;
import com.kuokyn.hms.repo.RoomRepository;
import com.kuokyn.hms.repo.RoomTypeRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BookingService {
    private BookingRepository bookingRepository;

    public ResponseEntity<List<Booking>> getAllBookings() {
        try {
            List<Booking> bookings = new ArrayList<>(bookingRepository.findAll());
            if (bookings.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(bookings, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
    /*public ResponseEntity<List<Booking>> getUserBookings() {
        
    }*/

    public ResponseEntity<Booking> getBookingById(Long id) {
        Optional<Booking> booking = bookingRepository.findById(id);
        return booking.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

    // проблема - проверить, свободны ли даты на букинг
    // наверное, это делается во фронте по фильтрам, но пока этого нет
    public ResponseEntity<Booking> createBooking(Booking booking) {
        try {
            Booking newBooking = bookingRepository.save(booking);
            return new ResponseEntity<>(newBooking, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<Booking> updateBooking(Long id, Booking booking) {
        Optional<Booking> bookingData = bookingRepository.findById(id);
        if (bookingData.isPresent()) {
            Booking _booking = bookingData.get();
            _booking.setCheckIn(booking.getCheckIn());
            _booking.setCheckOut(booking.getCheckOut());
            return new ResponseEntity<>(bookingRepository.save(_booking), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    public ResponseEntity<HttpStatus> deleteBooking(Long id) {
        try {
            bookingRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

}
