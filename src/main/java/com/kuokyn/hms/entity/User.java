package com.kuokyn.hms.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;

import jakarta.persistence.*;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "user")
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", length = 128, nullable = false)
    @Email
    private String email;

    @Column(name = "name", length = 128, nullable = false)
    private String name;

    @Column(name = "surname", length = 128, nullable = false)
    private String surname;

    @Size(max = 12)
    @Column(name = "phone")
    private String phone;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "user_authority",
            joinColumns = {@JoinColumn(name = "user_phone", referencedColumnName = "phone")},
            inverseJoinColumns = {@JoinColumn(name = "authority_title", referencedColumnName = "title")})
    private Set<Authority> authorities = new HashSet<>();

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", phone='" + phone + '\'' +
                ", authorities=" + authorities +
                '}';
    }

    /* @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<Authority> authList;
        authList = this.authorities;
        return (Collection<? extends GrantedAuthority>) authList;
    }*/
}
