package com.kuokyn.hms.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "job")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Job {
    @Id
    @Column(name = "title", length = 128, nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

}
