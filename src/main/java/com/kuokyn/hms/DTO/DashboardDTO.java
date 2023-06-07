package com.kuokyn.hms.DTO;

import com.kuokyn.hms.entity.Booking;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class DashboardDTO {

    private Long userAmount;
    private Long bookingAmount;
    private Long roomAmount;
    private Double revenue;
    private Long workerAmount;
    private Long serviceAmount;
    private List<Booking> recentBookings;

}
