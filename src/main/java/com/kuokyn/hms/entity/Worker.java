package com.kuokyn.hms.entity;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name = "worker")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email", length = 128, nullable = false)
    private String email;

    @Column(name = "name", length = 128, nullable = false)
    private String name;

    @Column(name = "surname", length = 128, nullable = false)
    private String surname;

    @Size(max = 12)
    @Column(name = "phone")
    private String phone;

    @Valid
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "job_title", nullable = false)
    private Job job;

}
