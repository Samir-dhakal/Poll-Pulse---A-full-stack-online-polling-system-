package com.tillu.pollpulse.model;

import jakarta.persistence.Entity;

@Entity
public class Option {
    @ID
    long id;
    String Text;
    int votecounter;

}
