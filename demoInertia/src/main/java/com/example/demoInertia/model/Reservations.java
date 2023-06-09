package com.example.demoInertia.model;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Reservations {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;
    
    @ManyToOne
    private Organization organization;

    private LocalDate visitDate;
    private LocalTime visitStartHour;
    private LocalTime visitEndHour;
    private String comment;


    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public Organization getOrganization() {
        return organization;
    }
    public void setOrganization(Organization organization) {
        this.organization = organization;
    }
    public LocalDate getVisitDate() {
        return visitDate;
    }
    public void setVisitDate(LocalDate visitDate) {
        this.visitDate = visitDate;
    }
    public LocalTime getVisitStartHour() {
        return visitStartHour;
    }
    public void setVisitStartHour(LocalTime visitStartHour) {
        this.visitStartHour = visitStartHour;
    }
    public LocalTime getVisitEndHour() {
        return visitEndHour;
    }
    public void setVisitEndHour(LocalTime visitEndHour) {
        this.visitEndHour = visitEndHour;
    }
    public String getComment() {
        return comment;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }
    


}
