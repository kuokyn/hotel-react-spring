package com.kuokyn.hms.controller;

import com.kuokyn.hms.entity.Booking;
import com.kuokyn.hms.entity.Room;
import com.kuokyn.hms.entity.User;
import com.kuokyn.hms.repo.RoomRepository;
import com.kuokyn.hms.repo.UserRepository;
import com.kuokyn.hms.service.BookingService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    private BookingService bookingService;

    /* ====== ADMIN ====== */
    
    @GetMapping("/admin/bookings")
    public ResponseEntity<List<Booking>> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/admin/bookings/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable("id") Long id) {
        return bookingService.getBookingById(id);
    }

    @PostMapping("/admin/bookings")
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }

    @PutMapping("/admin/bookings/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable("id") Long id,
                                                 @RequestBody Booking booking) {
        return bookingService.updateBooking(id, booking);
    }

    @DeleteMapping("/admin/bookings/{id}")
    public ResponseEntity<HttpStatus> deleteBooking(@PathVariable("id") Long id) {
        return bookingService.deleteBooking(id);
    }
    
    /* ====== USER ====== */

    @GetMapping("/bookings")
    public ResponseEntity<List<Booking>> getUserBookings() {
        return bookingService.getAllBookings();
    }

    /*@GetMapping("/mybookings/{id}")
    public ResponseEntity<Booking> getUserBookingById(@PathVariable("id") Long id) {
        return bookingService.getUserBookingById(id);
    }

    @PostMapping("/book")
    public ResponseEntity<Booking> createUserBooking(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }

    @PutMapping("/mybookings/{id}")
    public ResponseEntity<Booking> updateUserBooking(@PathVariable("id") Long id,
                                                 @RequestBody Booking booking) {
        return bookingService.updateBooking(id, booking);
    }

    @DeleteMapping("/mybookings/{id}")
    public ResponseEntity<HttpStatus> deleteUserBooking(@PathVariable("id") Long id) {
        return bookingService.deleteBooking(id);
    }*/
}
