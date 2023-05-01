package com.kuokyn.hms.entity;

import com.kuokyn.hms.repo.BookingRepository;
import com.kuokyn.hms.service.BookingService;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class Dashboard {

    private Long userAmount;
    private Long bookingAmount;
    private Long roomAmount;
    private Double revenue;
    private List<Booking> recentBookings;

    public Dashboard(Long userAmount,
                     Long bookingAmount,
                     Long roomAmount) {
        this.userAmount = userAmount;
        this.bookingAmount = bookingAmount;
        this.roomAmount = roomAmount;
    }
}
