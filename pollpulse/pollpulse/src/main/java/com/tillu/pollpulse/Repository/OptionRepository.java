package com.tillu.pollpulse.Repository;

import com.tillu.pollpulse.model.Option;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OptionRepository extends JpaRepository<Option, Long> {
    // Spring Data JPA automatically provides methods for the Option entity.
}