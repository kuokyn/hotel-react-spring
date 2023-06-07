package com.kuokyn.hms.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class BookingDTO {

    @JsonProperty("room_id")
    private String room;

    @JsonProperty("user_id")
    private String user;

    @JsonProperty("people")
    private String numberOfPeople;

    @JsonProperty("checkIn")
    private String checkIn;

    @JsonProperty("checkOut")
    private String checkOut;

}
