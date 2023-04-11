package com.kuokyn.hms.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

@Entity
@Table(name = "booking")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Valid
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "room_id", nullable = false)
    private Room room;

    @Valid
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "people")
    private Integer numberOfPeople;

    @Column(name = "check_in_date", nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date checkIn;

    @Column(name = "check_out_date", nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date checkOut;

    private static SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);

    public Booking(@Valid Room room, @Valid User user, int numberOfPeople, String checkIn, String checkOut) {
        this.room = room;
        this.user = user;
        this.numberOfPeople = numberOfPeople;
        try {
            this.checkIn = formatter.parse(checkIn);
            this.checkOut = formatter.parse(checkOut);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }

    /*public Booking() {
        this.user = new User();
        this.room = new Room();
    }
*/
}
