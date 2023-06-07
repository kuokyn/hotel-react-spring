package com.kuokyn.hms.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "buff_bookings")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class BufferBooking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "room_id")
    @JsonProperty("room_id")
    private String roomId;

    @Column(name = "user_id")
    @JsonProperty("user_id")
    private String userId;

    @Column(name = "people")
    @JsonProperty("people")
    private String people;
}
