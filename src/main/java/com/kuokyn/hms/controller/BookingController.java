package com.kuokyn.hms.controller;

import com.kuokyn.hms.entity.Booking;
import com.kuokyn.hms.DTO.BookingDTO;
import com.kuokyn.hms.DTO.DashboardDTO;
import com.kuokyn.hms.entity.BufferBooking;
import com.kuokyn.hms.repo.*;
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
    private final WorkerRepository workerRepository;
    private final ServiceRepository serviceRepository;
    private final BufferBookingRepository bufferBookingRepository;

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
    public ResponseEntity<Booking> createBooking(@RequestBody BookingDTO booking) {
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


    @GetMapping("/admin")
    public ResponseEntity<DashboardDTO> getDashboard() {
        try {
            DashboardDTO dashboard = new DashboardDTO();
            dashboard.setUserAmount(userService.getUsersAmount());
            dashboard.setBookingAmount(bookingService.getBookingsAmount());
            dashboard.setRoomAmount(roomService.getRoomAmount());
            dashboard.setRecentBookings(bookingRepository.findLastThree());
            dashboard.setRevenue(bookingRepository.getAllRevenue());
            dashboard.setWorkerAmount(workerRepository.count());
            dashboard.setServiceAmount(serviceRepository.count());
            return new ResponseEntity<>(dashboard, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
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

//    @PostMapping("/booking/add")
//    public ResponseEntity<Booking> createUserBooking(@RequestBody BookingDTO booking) {
//        return bookingService.createBooking(booking);
//    }

    @PostMapping("/")
    public ResponseEntity<BufferBooking> createUserBuffBooking(@RequestBody BufferBooking buffBooking) {
        return new ResponseEntity<>(bufferBookingRepository.save(buffBooking), HttpStatus.OK);
    }

    @PostMapping("/booking/add/{id}")
    public ResponseEntity<Booking> createUserBooking(@PathVariable("id") Long id, @RequestBody BookingDTO booking) {
        return bookingService.createBooking(booking);
    }

    @GetMapping("/booking/add/{id}")
    public ResponseEntity<BufferBooking> getChosenBooking(@PathVariable("id") Long id) {
        BufferBooking booking = bufferBookingRepository.findById(id).get();
        try {
            return new ResponseEntity<>(booking, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping("/bookings/{id}")
    public ResponseEntity<Booking> updateUserBooking(@PathVariable("id") Long id,
                                                     @RequestBody Booking booking) {
        return bookingService.updateBooking(id, booking);
    }

    @DeleteMapping("/bookings/{id}")
    public ResponseEntity<HttpStatus> deleteUserBooking(@PathVariable("id") Long id) {
        return bookingService.deleteBooking(id);
    }
}
