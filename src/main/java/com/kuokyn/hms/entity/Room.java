package com.kuokyn.hms.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import java.util.Set;

@Entity
@Table(name = "room")
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Valid
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "room_type_title", nullable = false)
    private RoomType roomType;

    @Column(name="chambers", nullable = false)
    private int chambers;

    @Column(name="people", nullable = false)
    private int people;

//    @JsonIgnore
//    @OneToMany(mappedBy = "room")
//    private Set<Booking> bookings;

}
