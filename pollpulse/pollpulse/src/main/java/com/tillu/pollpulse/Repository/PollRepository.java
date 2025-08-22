package com.tillu.pollpulse.repository;



import com.tillu.pollpulse.model.Poll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PollRepository extends JpaRepository<Poll, Long> {
    // Spring Data JPA automatically provides methods like save(), findById(), findAll(), etc.
}
