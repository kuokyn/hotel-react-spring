package com.kuokyn.hms.entity;

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

}
