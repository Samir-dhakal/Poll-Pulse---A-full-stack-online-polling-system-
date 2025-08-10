package com.tillu.pollpulse.model;

import jakarta.persistence.Entity;

import java.time.LocalDateTime;

@Entity

public class Poll {
    private long id;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTittile() {
        return tittile;
    }

    public void setTittile(String tittile) {
        this.tittile = tittile;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    private String tittile;
    private String description;
    private LocalDateTime endTime;

    public enum status {
        ACTIVE, CLOSED
    }

}
