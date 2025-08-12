package com.tillu.pollpulse.Repository;

import com.tillu.pollpulse.model.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {
    // Spring Data JPA automatically provides methods for the Vote entity.
}
