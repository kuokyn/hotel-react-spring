package com.kuokyn.hms.controller;

import com.kuokyn.hms.entity.Booking;
import com.kuokyn.hms.entity.Room;
import com.kuokyn.hms.entity.User;
import com.kuokyn.hms.repo.RoomRepository;
import com.kuokyn.hms.repo.UserRepository;
import com.kuokyn.hms.service.BookingService;
import com.kuokyn.hms.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    private BookingService bookingService;
    private UserRepository userRepository;
    private RoomRepository roomRepository;

    /* ====== ROLE_ADMIN ====== */
    
    @GetMapping("/bookings")
    public ResponseEntity<List<Booking>> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/bookings/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable("id") Long id) {
        return bookingService.getBookingById(id);
    }

    @PostMapping("/bookings")
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
        System.out.println(booking);
        User user = userRepository.findUserById(booking.getUser().getId());
        Room room = roomRepository.findRoomById(booking.getRoom().getId());
        booking.setRoom(room);
        booking.setUser(user);
        System.out.println(booking);
        return bookingService.createBooking(booking);
    }

    @PutMapping("/bookings/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable("id") Long id,
                                                 @RequestBody Booking booking) {
        return bookingService.updateBooking(id, booking);
    }

    @DeleteMapping("/bookings/{id}")
    public ResponseEntity<HttpStatus> deleteBooking(@PathVariable("id") Long id) {
        return bookingService.deleteBooking(id);
    }

    
    /* ====== ROLE_USER ====== */

    // проблема - как вывести бронирования текущего авторизованного пользователя?
    // типа как передать бэку, что я авторизован....

    @GetMapping("/mybookings")
    public ResponseEntity<List<Booking>> getUserBookings() {
        return bookingService.getUserBookings();
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
