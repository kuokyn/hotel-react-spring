package com.kuokyn.hms.controller;

import com.kuokyn.hms.entity.Booking;
import com.kuokyn.hms.entity.Dashboard;
import com.kuokyn.hms.entity.Room;
import com.kuokyn.hms.entity.User;
import com.kuokyn.hms.repo.BookingRepository;
import com.kuokyn.hms.repo.RoomRepository;
import com.kuokyn.hms.repo.UserRepository;
import com.kuokyn.hms.service.BookingService;
import com.kuokyn.hms.service.RoomService;
import com.kuokyn.hms.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    private final BookingService bookingService;
    private final UserService userService;
    private final RoomService roomService;
    private final BookingRepository bookingRepository;

    /* ====== ADMIN ====== */

    @GetMapping("/admin")
    public ResponseEntity<Dashboard> getDashboard() {
        try {
            Dashboard dashboard = new Dashboard();
            dashboard.setUserAmount(userService.getUsersAmount());
            dashboard.setBookingAmount(bookingService.getBookingsAmount());
            dashboard.setRoomAmount(roomService.getRoomAmount());
            dashboard.setRecentBookings(bookingRepository.findLastThree());
            dashboard.setRevenue(bookingRepository.getAllRevenue());
            return new ResponseEntity<>(dashboard, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/admin/bookings")
    public ResponseEntity<List<Booking>> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/admin/bookings/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable("id") Long id) {
        return bookingService.getBookingById(id);
    }

    @GetMapping("/admin/checkouts")
    public ResponseEntity<List<Booking>> getBookingCheckouts() {
        return bookingService.getBookingCheckouts();
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

    @GetMapping("/bookings/{id}")
    public ResponseEntity<Booking> getUserBookingById(@PathVariable("id") Long id) {
        return bookingService.getBookingById(id);
    }

    @PostMapping("/booking/add")
    public ResponseEntity<Booking> createUserBooking(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }


    @PutMapping("/bookings/{id}")
    public ResponseEntity<Booking> updateUserBooking(@PathVariable("id") Long id,
                                                 @RequestBody Booking booking) {
        return bookingService.updateBooking(id, booking);
    }

    @DeleteMapping("/bookings")
    public ResponseEntity<HttpStatus> deleteUserBooking(@PathVariable("id") Long id) {
        return bookingService.deleteBooking(id);
    }
}
