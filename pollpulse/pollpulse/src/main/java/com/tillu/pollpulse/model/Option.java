package com.tillu.pollpulse.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Option {
    @Id
    private long id;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getText() {
        return Text;
    }

    public void setText(String text) {
        Text = text;
    }

    public int getVotecounter() {
        return votecounter;
    }

    public void setVotecounter(int votecounter) {
        this.votecounter = votecounter;
    }

    private String Text;
    private int votecounter;

}
