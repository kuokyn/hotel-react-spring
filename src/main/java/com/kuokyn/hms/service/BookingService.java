package com.kuokyn.hms.service;

import com.kuokyn.hms.entity.Booking;
import com.kuokyn.hms.entity.Room;
import com.kuokyn.hms.entity.User;
import com.kuokyn.hms.repo.BookingRepository;
import com.kuokyn.hms.repo.RoomRepository;
import com.kuokyn.hms.repo.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BookingService {

    private BookingRepository bookingRepository;
    private UserRepository userRepository;
    private RoomRepository roomRepository;

    public ResponseEntity<List<Booking>> getAllBookings() {
//        getUserBookings();
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

    public ResponseEntity<List<Booking>> getUserBookings() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String phone = auth.getName();
        List<Booking> userBookings = new ArrayList<>(bookingRepository.findBookingByUserPhone(phone));
        if (!userBookings.isEmpty()) {
            return new ResponseEntity<>(userBookings, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    public ResponseEntity<Booking> getBookingById(Long id) {
        Optional<Booking> booking = bookingRepository.findById(id);
        return booking.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

    // проблема - проверить, свободны ли даты на букинг
    // наверное, это делается во фронте по фильтрам, но пока этого нет
    public ResponseEntity<Booking> createBooking(Booking booking) {
        System.out.println("------starting search for ids");
        User user = userRepository.findUserById(booking.getUser().getId());
        System.out.println(user);
        Long roomId = booking.getRoom().getId();
        System.out.println("room id from post query is === " + roomId);
        Room room = roomRepository.findRoomById(roomId);
        System.out.println(room);
        booking.setRoom(room);
        booking.setUser(user);
        System.out.println(booking);
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
            _booking.setNumberOfPeople(booking.getNumberOfPeople());
            _booking.setRoom(roomRepository.findRoomById(booking.getRoom().getId()));
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

    public Long getBookingsAmount() {
       return bookingRepository.count();
    }

    public ResponseEntity<List<Booking>> getBookingCheckouts() {
        List<Booking> bookingCheckouts = new ArrayList<>(bookingRepository.getBookingCheckouts());
        if (!bookingCheckouts.isEmpty()) {
            return new ResponseEntity<>(bookingCheckouts, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
